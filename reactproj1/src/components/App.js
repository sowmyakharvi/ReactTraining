import React from "react"
import SignIn from "./login/SignIn"
import SignUp from "./login/SignUp"
import {Route, Link, Switch} from "react-router-dom"
import NotFound, {Home} from "./routecomponent"
import ManageProducts from "./shopping/ManageProducts"

class App extends React.Component{
    render(){
        return <div>
            <nav className="navbar navbar-inverse">
            <Link to="/" className = "navbar-brand">My React App </Link>
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>        
                <li><Link to="/signin">SignIn</Link></li>
                <li><Link to="/signup">SignUp</Link></li>   
                <li><Link to="/manage">Manage Products</Link></li>    
            </ul>

            </nav>
            <Switch>    
            <Route exact path="/" component={Home} /> 
            <Route path = "/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/manage" component={ManageProducts} />
            <Route path="*" component={NotFound} /></Switch>
            </div>
    }
}
export default App