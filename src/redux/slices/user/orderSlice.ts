import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../../interface/orderInterface";
import { userCreateOrderApi, userGetOrdersByUserIdApi } from "../../../api/userApi";

interface IHandleOrder {
    orders:IOrder[];
    loading:boolean;
    error:string | null;
}
const initialState : IHandleOrder = {
    orders:[],
    loading:false,
    error:null
}

export const userCreateOrder = createAsyncThunk('user/create-data',
    async(orderData : IOrder,{rejectWithValue}) => {
         try{
             const res = await userCreateOrderApi(orderData);
             return res.data.order
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Order not created !');
         }
    }
 );
export const useGetOrdersByUserId = createAsyncThunk('/user/get-orders-by-userId',
    async(_,{rejectWithValue}) => {
         try{
             const res = await userGetOrdersByUserIdApi();
             return res.data.order
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Order not created !');
         }
    }
 );

const userOrederSlice = createSlice({
    name:"userHome",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
       //Create order
       .addCase(userCreateOrder.pending,(state) => {
        state.loading = true;
            state.error = null;
        })
        .addCase(userCreateOrder.fulfilled,(state, action:PayloadAction<IOrder>) => {
            state.orders.push(action.payload) 
            state.loading = false;
            state.error = null;
        })
        .addCase(userCreateOrder.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
       //Get all orders by userId
       .addCase(useGetOrdersByUserId.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(useGetOrdersByUserId.fulfilled,(state, action:PayloadAction<IOrder[]>) => {
            state.orders = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(useGetOrdersByUserId.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        }
})
export default userOrederSlice.reducer