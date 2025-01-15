import { combineReducers } from "@reduxjs/toolkit";
import freelancerHandleGigReducer from '../slices/freelancer/gigHandleSlice';

export const freelancerRootReducer = combineReducers({
    freelancerGigManagement:freelancerHandleGigReducer,
})