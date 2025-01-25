import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../../interface/orderInterface";
import { adminGetAllOrdersApi } from "../../../api/AdminApi";

interface IHandleGig {
    orders: IOrder[];
    loading:boolean;
    error:string | null;
}
const initialState : IHandleGig = {
    orders:[],
    loading:false,
    error:null
}

export const adminGetAllOrders = createAsyncThunk('admin/get-all-orders',
    async(_,{rejectWithValue}) => {
         try{
             const res = await adminGetAllOrdersApi()
             return res.data.orders
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Orders not found !');
         }
    }
 );

const adminOrderManagement = createSlice({
    name:"adminOrderManagement",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(adminGetAllOrders.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminGetAllOrders.fulfilled,(state, action:PayloadAction<IOrder[]>) => {
            state.orders = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(adminGetAllOrders.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        
    }
})
export default adminOrderManagement.reducer