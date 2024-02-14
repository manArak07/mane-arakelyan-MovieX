// ation-creators for adding to and removing from watchlist
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from "..";

// add to watchlist function
function addToWatchlist(item) {
    return {
        type: ADD_TO_WATCHLIST,
        payload: item
    }
}
// remove from watchist function
function removeFromWatchList(item) {
    return {
        type: REMOVE_FROM_WATCHLIST,
        payload: item.id
    }
}

export {addToWatchlist, removeFromWatchList}