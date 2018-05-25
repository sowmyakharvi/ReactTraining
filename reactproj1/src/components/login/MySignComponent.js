import React, {Component} from "react"

export default class MySignComponent extends Component{
    render(){
        //while rendering
        console.log("render")
    
        return <div>
            <h3>{this.props.heading}</h3>
            <form>
                <input type="text" placeholder = "Enter User Id" ref="userId"/> <br/>
                <input type="password" placeholder = "Enter password" ref="pwd" /> <br/>
                <button className="btn btn-primary" type="button" onClick={this.sendData}>{this.props.heading}</button>

            </form>

            </div>
    }

    sendData = () => {
        this.props.onSignIn ? this.props.onSignIn(this.refs.userId.value) : null
        }
        
        //console.log("send data function called..", this.refs.userId.value)

        //creation of component
        constructor(){
            super()
            console.log("constructor..",)
            //console.log("Props in Constructor..",this.props.heading)
        }

        //before rendering
        componentWillMount(){
            console.log("component Will Mount..", this.props.heading)
            //document.querySelector("h3").style.color = 'red'
        }

        //after render
        componentDidMount(){
            console.log("component Did Mount..")
           // document.querySelector("h3").style.color = 'red'
           
        }

        //destroy
        componentWillUnmount(){
            console.log("component Will Unmount..")
        }


    }
