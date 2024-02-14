const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST"
const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST"

// initial state for watchList
const watchListInitialState = {
    items: []
  };
  
  //  watchListReducer unction 
  function watchListReducer(state = watchListInitialState, action) {
    switch (action.type) {
      case ADD_TO_WATCHLIST:
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      case REMOVE_FROM_WATCHLIST:
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  }

  const getItems = state => state.items;
  
  export {getItems, watchListInitialState, watchListReducer, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST };
  export * from "./watchlist-action-creators"