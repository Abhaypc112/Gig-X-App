import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../../interface/orderInterface";
import { freelancerGetOrdersApi } from "../../../api/FreelancerApi";

interface IHandleOrder {
    orders:IOrder[];
    loading:boolean;
    error:null | string
}

const initialState : IHandleOrder = {
    orders:[],
    loading:false,
    error:null
}

export const freelancerGetOrders = createAsyncThunk('/freelancer/get-all-orders',
  async (_,{rejectWithValue}) => {
    try{
        const res = await freelancerGetOrdersApi();
        return res.data;
    }catch(error : any) {
        return rejectWithValue(error.response?.data?.message || 'Orders not Found !'); 
    }
  }
)

const freelancerOrderHandleSlice= createSlice({
    name:"freelancerOrderHandleSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder
        .addCase(freelancerGetOrders.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(freelancerGetOrders.fulfilled,(state, action:PayloadAction<IOrder[]>) => {
            state.orders = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerGetOrders.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export default freelancerOrderHandleSlice.reducer;