/*import Point from "./module1"
import {Point3D} from "./module1"
console.log("First react js file")

//Instance of point class
let c1 = new Point(4,10)
c1.display()

let p1 = new Point3D(1,2,3)
p1.display()*/

//Refer API
import React from "react"
import ReactDOM from "react-dom"

//Define element
//let element = React.createElement("i", null, "My First React Application")

//Aquire container
let root = document.getElementById("root")

//Render the element
//ReactDOM.render(element,root1)

/*ReactDOM.render(<div>
    <h3>Welcome to react</h3>
    <u> Wells Fargo</u> 
    {12+40}
    </div>
    , root)*/

    //Define a functioanl component
    let MyTag = () => {
        return <h1> My First Functioanl component</h1>
        }

        ReactDOM.render(<MyTag/>, root)

