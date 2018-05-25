import React, {Component} from "react"
import {connect} from "react-redux"



class CartItems extends Component{
    render(){
        let output = null;
        if(this.props.cartitems.length > 0){
output = this.props.cartitems.map((item) => {
    return (<tr key={item.id}>    
        <td><button className="btn btn-danger btn-xs" onClick={() => this.props.deleteFromCart(item)}>X</button>{item.name}</td><td>{item.price}</td><td><button className="quantity-input__modifier quantity-input__modifier--left" onClick={this.increment}>>{item.qty}</button></td><td>{item.price*item.qty}</td>    
    </tr>)
})
        }else{
            output = <tr>
                <td colSpan= "3">No cart items</td>
            </tr>
        }
        
        return <div>
            <h3>Carts Items are<span className="label label-primary" >{this.props.cartitems.length}</span></h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th><th>Price</th><th>Quantity</th><th>Amount</th>                        
                    </tr>
                </thead>
                <tbody>
                {output}
                <tr>
                    <td colSpan="3">Total Amount</td><td>{this.totalAmount()}</td>
                    </tr>

                </tbody>
            </table>
            </div>
    }
    totalAmount = () =>{
        let tot = 0;
        for(let e of this.props.cartitems){
            tot += (e.price * e.qty)
        }
        return tot;
    }
}
function mapStateToProps(state){
    return {cartitems : state.cartReducer}
}

function mapDispatchToprops(dispatch){
    return {
        deleteFromCart : (item) => {         
         dispatch({
             type : "DELETE_FROM_CART",
             payload : item
         }) 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops) (CartItems)

