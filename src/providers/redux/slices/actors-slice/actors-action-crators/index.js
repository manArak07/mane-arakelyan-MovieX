// action-creator for actors to updating index

import { UPDATE_INDEX } from "..";

const updateIndex = (newIndex) => {
    return {
        type: UPDATE_INDEX,
        payload: newIndex
    }
}

export {updateIndex}