/*let productsData = [{"id" : 1, "name" : "Bravia", "price" : 56000},
                    {"id" : 2, "name" : "Galaxy S", "price" : 37000},
                    {"id" : 3, "name" : "Panasonic TV", "price" : 76000}
                ]*/
let productsData = []

export function prodctReducer (state=productsData, action) {
    switch(action.type) {
        case "ADD_TO_CART":
        console.log("Products reduce add to cart")
        let p = state.filter((product) => product.id !== action.payload.id)
        return p
        case "DELETE_FROM_CART" : 
        console.log("Products reduce delete from cart")
        state = [...state, action.payload]
        return state
        case "ADD_PRODUCT" : 
        console.log("Products reduce add produc")
        state = [...state, action.payload]
        return state
        /*case "UPDATE_PRODUCT" : 
        console.log("Products reduce add produc")
        state = [...state, action.payload]
        return state  */      
        case "DELETE_PRODUCT":
        let idx = state.findIndex((e) => e._id == action.payload)
        return [...state.slice(0,idx), ...state.slice(idx+1)]
        case "GET_PRODUCTS":
        return [...action.payload]        
        default:return state
        console.log("default reducer")
    }
}