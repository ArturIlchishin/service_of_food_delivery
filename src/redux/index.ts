import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice'

const rootReducer = combineReducers({
    userReducer: userReducer,
})

export const store = configureStore( {
    reducer: rootReducer,
})