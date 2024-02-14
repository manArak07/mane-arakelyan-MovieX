const UPDATE_INDEX = "UPDATE_INDEX"

// index initial state for actor's indexes
const actorInitialState = {
    currentIndex: 0
}

// reducer to return needed indexes for actors
const actorReducer = (state = actorInitialState, action) => {
    switch (action.type) {
        case UPDATE_INDEX:
            return {
                ...state, currentIndex: action.payload
            }
            
        default:
            return state;
    }
}

const getActor = state => state.actor.currentIndex

export {actorInitialState, actorReducer, UPDATE_INDEX, getActor}
export * from "./actors-action-crators"