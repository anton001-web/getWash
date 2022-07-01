import {MODAL_TOGGLE, TOGGLE_BURGER} from "./types";

export const toggleBurger = () => {
    return {
        type: TOGGLE_BURGER
    }
}

export const toggleModal = () => {
    return {
        type: MODAL_TOGGLE
    }
}