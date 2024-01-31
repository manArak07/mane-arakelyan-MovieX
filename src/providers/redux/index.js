import { createStore } from "redux";

const store = createStore(function (state, action) {
    if (action.type === "ADD_AD_TO_CART") {
            return {
                cart: [...state.cart, action.payload]
            }
    } else if (action.type === "REMOVE_AD_FROM_CART") {
        return {
            cart: state.cart.filter(ad => ad.id !== action.payload)
        }
    }

    return state
}, {
    cart: []
})

export default store