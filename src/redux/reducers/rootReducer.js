import {combineReducers} from "redux";
import {burgerReducer} from "./burgerReducer";
import {modalReducer} from "./modalReducer";


export const rootReducer = combineReducers({
    burger: burgerReducer,
    modal: modalReducer
})