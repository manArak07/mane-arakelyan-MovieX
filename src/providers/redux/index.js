import { combineReducers } from "redux";
import { createStore } from "redux";
import { cartInitialState, cartReducer } from "./slices";

const store = createStore(combineReducers({
    cart: cartReducer
}), {
    cart: cartInitialState
})

export default store