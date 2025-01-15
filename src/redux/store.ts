import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import {adminRootReducer} from './rootReducers/adminRootReducer';
import { freelancerRootReducer } from './rootReducers/freelancerRootReducer';


export const store = configureStore({
    reducer:{
        auth:authReducer,
        admin:adminRootReducer,
        freelancer:freelancerRootReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;