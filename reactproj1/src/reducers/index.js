import {combineReducers} from "redux"
import {cartReducer} from "./CartReducer"
import {prodctReducer} from "./ProductReducer"

export default combineReducers({prodctReducer, cartReducer})