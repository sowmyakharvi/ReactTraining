import React, {Component} from "react"
import {connect} from "react-redux"
import axios from "axios"

class ManageProducts extends Component{
    render(){
        let output = null;
        if(this.props.mgProducts.length > 0){
output = this.props.mgProducts.map((product) => {
    return (<tr key={product._id}>
    <td>{product._id}</td><td>{product.name}</td><td>{product.price}</td>
        <td><button className="btn btn-danger" onClick={() => this.handleDelete(product._id)}>Delete</button>
        <button className = "btn btn-success" onClick={() => this.handleEdit(product)}>Edit</button>
        </td>
        
    </tr>)
})
        }else{
            output = <tr>
                <td colSpan= "3">No products available</td>
            </tr>
        }
        
        return <div>
            <h3>Manage Products</h3>
            <form className="well">
                <input type="text" ref="pid" placeholder="Enter Product id" readOnly></input><br/>
                <input type="text" ref="pname" placeholder="Enter Product name"></input><br/>
                <input type="text" ref="price" placeholder="Enter Product price"></input><br/>
                <button className="btn btn-primary" type="button" onClick={this.handleAdd}>Add</button>
                <button className="btn btn-primary" type="button" onClick={this.handleUpdate}>UPDATE</button>
            </form>
            <table className="table table-bordered">
            <thead>
                <tr>
                <th>Product Id</th><th>Name</th><th>Price</th><th>Action</th>                    
                </tr>
                </thead>
                <tbody>
                {output}
                </tbody>
            </table>
        </div>

    }

    constructor(){
        super()
        this.apiUrl = "http://localhost:3000/wsproducts"
        
    }
    componentDidMount(){
        axios.get(this.apiUrl).then(
            (resp) => {
                this.props.getProducts(resp.data),
                (err)=>{
                    console.log("error", err)
                }
            })
    }
    handleAdd=()=>{
        let newproduct = {name: this.refs.pname.value, price:this.refs.price.value}
        axios.post(this.apiUrl, newproduct).then(
            (resp) =>{
                this.props.addProduct(newproduct)
            },
            (err) =>{
                console.log("ADD PRODUCT ERROR", err)
            }
        )
        
    }
    handleUpdate=()=>{
        let modifiedproduct = {name: this.refs.pname.value, price:this.refs.price.value}
        axios.put(this.apiUrl+"/"+this.refs.pid.value, modifiedproduct).then(
            (resp) =>{
                console.log("update success")
               // this.props.updateProduct(modifiedproduct)
            },
            (err) =>{
                console.log("Update PRODUCT ERROR", err)
            }
        )
        
    }
    handleDelete=(id)=>{
        axios.delete(this.apiUrl+"/"+id).then(
            (resp) => {
                this.props.deleteProduct(id)
            },
            (err) =>{
                console.log("DELETE ERROR", err)
            }
        )
         
    }

    handleEdit = (product) =>{
        this.refs.pid.value = product._id
        this.refs.pname.value = product.name
        this.refs.price.value = product.price
    }
}

function mapStateToProps(state){
    return {mgProducts : state.prodctReducer}
}

function mapDispatchToProps(dispatch){
return{
    addProduct : (newproduct) => {
        dispatch({type:"ADD_PRODUCT" ,payload : newproduct})
    },
    updateProduct : (newproduct) => {
        dispatch({type:"UPDATE_PRODUCT" ,payload : newproduct})
    },
    deleteProduct : (id) => {
        dispatch({type:"DELETE_PRODUCT" ,payload : id})
    },
    getProducts : (products) => {
        dispatch({type:"GET_PRODUCTS" ,payload : products})
    }
}}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProducts)