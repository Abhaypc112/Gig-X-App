import { combineReducers } from "@reduxjs/toolkit";
import handleUsersReducer from './admin/userHandleSlice';

export const adminRootReducer = combineReducers({
    userManagemant:handleUsersReducer
})