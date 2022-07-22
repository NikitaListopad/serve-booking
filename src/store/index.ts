import {combineReducers, configureStore} from "@reduxjs/toolkit";
import hotelsReducer from "./hotelsReducer";


export const rootReducer = combineReducers({
    hotels: hotelsReducer
})

export const store = configureStore({
  reducer: rootReducer,
})
