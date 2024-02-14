import { combineReducers, createStore } from "redux";
import { actorInitialState, actorReducer } from "./slices/actors-slice";
import { watchListInitialState, watchListReducer } from "./slices/watchlist-slice";

// root reducer to combine all reducers
const rootReducer = combineReducers({
    actor: actorReducer,
    items: watchListReducer
});

// store to handle reducer with their initial states
const store = createStore(rootReducer, {
    actor: actorInitialState,
    items: watchListInitialState
});

export default store;
