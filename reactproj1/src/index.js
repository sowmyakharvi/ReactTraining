import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from "react-router-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import appReducers from "./reducers"


//let appStore = createStore(prodctReducer)
//let appStore = createStore(combineReducers({prodctReducer, cartReducer}))
let appStore = createStore(appReducers)


ReactDOM.render(
    <Provider store={appStore}>
    <BrowserRouter basename="/myshop/">
        <App/>
    </BrowserRouter>
    </Provider>
, document.getElementById("root"))
