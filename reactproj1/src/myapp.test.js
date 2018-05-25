import React from "react"
import ReactDOM from "react-dom"
import MySign from "./components/login/MySignComponent"

describe("Jest Demo", ()=>{
    it("knows 2 and 2 is 4", ()=>{
        expect(2+2).toBe(4)        
    })
})

it("should render without errors", ()=>{
    let div = document.createElement("div")
    ReactDOM.render(<MySign heading="Testing"/>, div)
    ReactDOM.unmountComponentAtNode(div)
})