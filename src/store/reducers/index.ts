import {combineReducers} from "redux";
import {hotelsReducer} from "./hotelsReducer";

export const rootReducer = combineReducers({
    hotels: hotelsReducer
})

export type RootState = ReturnType<typeof rootReducer>;