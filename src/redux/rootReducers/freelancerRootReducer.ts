import { combineReducers } from "@reduxjs/toolkit";
import freelancerHandleGigReducer from '../slices/freelancer/gigHandleSlice';
import freelancerHandleOrderReducer from '../slices/freelancer/freelancerOrderHandleSlice';
import freelancerHandleProfileReducer from '../slices/freelancer/freelancerProfileHandleSlice';

export const freelancerRootReducer = combineReducers({
    freelancerGigManagement:freelancerHandleGigReducer,
    freelancerOrderManagement:freelancerHandleOrderReducer,
    freelancerProfileManagement:freelancerHandleProfileReducer,
})