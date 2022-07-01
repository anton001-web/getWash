import {MODAL_TOGGLE} from "../types";


const initialState = {
    visibility: false
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_TOGGLE:
            return {...state, visibility: !state.visibility}
        default:
            return state
    }
}