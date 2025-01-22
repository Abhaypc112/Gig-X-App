import { combineReducers } from "@reduxjs/toolkit";
import adminHandleUsersReducer from '../slices/admin/manageUserSlice';
import adminHandleGigsReducer from '../slices/admin/manageGigsSlice';
import adminHandleOrdersReducer from '../slices/admin/manageOrderSlice';

export const adminRootReducer = combineReducers({
    adminUserManagemant:adminHandleUsersReducer,
    adminGigManagement:adminHandleGigsReducer,
    adminOrderManagement:adminHandleOrdersReducer,
})