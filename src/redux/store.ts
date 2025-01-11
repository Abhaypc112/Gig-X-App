import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import {adminRootReducer} from './slices/adminRootReducer';


export const store = configureStore({
    reducer:{
        auth:authReducer,
        admin:adminRootReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;