import { ADD_TO_CART,REMOVE_FROM_CART,CHECKOUT } from "./actions";

const addToCart = (data)=>{
    return {
        type:ADD_TO_CART,
        payload:data
    }
}
const removeFromCart = (id)=>{
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }
}

const checkout = ()=>{
    return {
        type:CHECKOUT
    }
}

export {addToCart,removeFromCart,checkout};