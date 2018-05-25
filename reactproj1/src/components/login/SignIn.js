import React, {Component} from "react"
import MySign from "./MySignComponent"

export default class SignIn extends Component{
    state = {loggedUserName : "Guest"}
    render(){
        return <div>
            <b>Welcome {this.state.loggedUserName} </b>
        <MySign heading = "Sign In" onSignIn={this.handleSignIn}/>
        </div>
    }

    handleSignIn = (userId) => {
        console.log("Parent Component" , userId)
        this.setState({loggedUserName: userId})
    }

}
