import { combineReducers } from "@reduxjs/toolkit";
import userHomeReducer from '../slices/user/homeSlice';
import userOredrReducer from '../slices/user/orderSlice';

export const userRootReducer = combineReducers({
    userHome:userHomeReducer,
    userOrder:userOredrReducer,
})