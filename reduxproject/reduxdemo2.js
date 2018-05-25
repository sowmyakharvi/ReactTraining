const redux = require("redux")
const createStore = redux.createStore;

let mathReducer = (state={count: 100},
action) => {
    switch(action.type){
        case "INCREMENT":
        state.count++
        return state
        case "ADD":
        state.count += action.payload
        return state
        default:return state
    }

}

let myStore = createStore(mathReducer)
console.log("initial state ",myStore.getState().count)

//3. observe the state changes
myStore.subscribe(() => {
    console.log("current state", myStore.getState().count)
})

//4. dispatch an action
myStore.dispatch({type: "INCREMENT"})
myStore.dispatch({type: "INCREMENT"})
myStore.dispatch({type: "ADD", payload: 8})