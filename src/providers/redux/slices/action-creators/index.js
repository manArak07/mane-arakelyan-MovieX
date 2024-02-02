import { ADD_PRODUCT_REDUX_KEY, REMOVE_PRODUCT_REDUX_KEY } from "..";

function addAd(ad) {
    return {
        type: ADD_PRODUCT_REDUX_KEY,
        payload: ad
    }
}

function removeAd(ad) {
    return {
        type: REMOVE_PRODUCT_REDUX_KEY,
        payload: ad.id
    }
    
}

export {addAd, removeAd}