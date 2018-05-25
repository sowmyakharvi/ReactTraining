import React, {Component} from "react"
import ProductList from "./shopping/ProductList"
import CartItems from "./shopping/CartItems"

export default class NotFound extends Component{
    render(){
        return <h3>Not Found...</h3>
    }
}

export class Home extends Component{
    render(){
        return <div className="row">
            <div className="col-sm-6 well">
            <ProductList/>
            </div>
            <div className="col-sm-6 well">
           <CartItems/>
            </div>

        </div>
    }
}
