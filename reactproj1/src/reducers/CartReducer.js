let cartData = []
export function cartReducer(state=cartData, action){
    switch(action.type){
        case "ADD_TO_CART" :
        console.log("Cart reducer")
        state = [...state, action.payload]
        return state
        case "DELETE_FROM_CART":
        console.log("Cart reducer delete from cart")
        let p = state.filter((item) => item.id !== action.payload.id)
        return p
        default : return state
    }
}