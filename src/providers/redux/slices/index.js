const ADD_PRODUCT_REDUX_KEY = "ADD_PRODUCT_TO_CART"
const REMOVE_PRODUCT_REDUX_KEY = "REMOVE_PRODUCT_FROM_CART"

const cartInitialState = []

function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_PRODUCT_REDUX_KEY:
            return [...state, action.payload];
        case REMOVE_PRODUCT_REDUX_KEY:
            return state.filter(ad => ad.id !== action.payload)
        default:
            return state;
    }
}

const getCart = state => state.cart

export {cartReducer, cartInitialState, ADD_PRODUCT_REDUX_KEY, REMOVE_PRODUCT_REDUX_KEY}
//selectors
export {getCart}
export * from "./action-creators"