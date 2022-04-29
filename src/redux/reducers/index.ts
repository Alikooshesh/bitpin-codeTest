import favMarketReducer from './favMarketReducer'
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
    favMarket : favMarketReducer
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['favMarket']},combinedReducers)
export default persistedReducers