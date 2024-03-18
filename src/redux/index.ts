import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice';
import bucketReducer from "./bucketSlice";

const rootReducer = combineReducers({
    userReducer: userReducer,
    bucketReducer: bucketReducer,
})

export const store = configureStore( {
    reducer: rootReducer,
})