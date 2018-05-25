const redux = require("redux")
const createStore = redux.createStore;

//1. define reducer
let mathReducer = (state=0, action) =>{
    /*if(action.type == "INCREMENT"){
        return state+1
    }else if(action.type == "ADD"){
        return state + action.payload
    }else{
        return state
    }*/
    switch(action.type){
        case "INCREMENT":
        return state+1
        case "ADD":
        return state + action.payload
        default:return state
    }
   
}

//2. create store with Math reducer
let myStore = createStore(mathReducer)
console.log("initial state ",myStore.getState())

//3. observe the state changes
myStore.subscribe(() => {
    console.log("current state", myStore.getState())
})

//Action creators

function increment () {
    return {type:"INCREMENT"}
}

function add(num){
    return {
        type: "ADD" , payload: num
    }
}
myStore.dispatch(increment())
myStore.dispatch(add(400))

//4. dispatch an action
/*myStore.dispatch({type: "INCREMENT"})
myStore.dispatch({type: "INCREMENT"})
myStore.dispatch({type: "ADD", payload: 8})*/

console.log("redux DEMO file message *^$$3333")