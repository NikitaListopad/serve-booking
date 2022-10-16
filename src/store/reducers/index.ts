import {combineReducers} from "redux";
import {hotelsReducer} from "./hotelsReducer";
import {modalReducer} from "./modalReducer";

export const rootReducer = combineReducers({
    hotels: hotelsReducer,
    modal: modalReducer
})

export type RootState = ReturnType<typeof rootReducer>;