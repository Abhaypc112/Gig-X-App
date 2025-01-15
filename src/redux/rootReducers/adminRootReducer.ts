import { combineReducers } from "@reduxjs/toolkit";
import adminHandleUsersReducer from '../slices/admin/manageUserSlice';
import adminHandleGigReducer from '../slices/admin/manageGigsSlice';

export const adminRootReducer = combineReducers({
    adminUserManagemant:adminHandleUsersReducer,
    adminGigManagement:adminHandleGigReducer,
})