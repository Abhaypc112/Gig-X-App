import { combineReducers } from "@reduxjs/toolkit";
import adminHandleUsersReducer from '../slices/admin/manageUserSlice';
import adminHandleGigsReducer from '../slices/admin/manageGigsSlice';
import adminHandleOrdersReducer from '../slices/admin/manageOrderSlice';
import adminHandleCategoryReducer from '../slices/admin/menageCategorySlice';

export const adminRootReducer = combineReducers({
    adminUserManagemant:adminHandleUsersReducer,
    adminGigManagement:adminHandleGigsReducer,
    adminOrderManagement:adminHandleOrdersReducer,
    adminCategoryManagement:adminHandleCategoryReducer,
})