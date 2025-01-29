import { combineReducers } from "@reduxjs/toolkit";
import userHomeReducer from '../slices/user/homeSlice';
import userOredrReducer from '../slices/user/orderSlice';
import userReviewReducer from '../slices/user/reviewSlice';

export const userRootReducer = combineReducers({
    userHome:userHomeReducer,
    userOrder:userOredrReducer,
    userReview:userReviewReducer
})