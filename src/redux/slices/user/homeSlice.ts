import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userCreateOrderApi, userGetAllCategorysApi, userGetAllGigsApi } from "../../../api/userApi";
import { ICategory, IGig } from "../../../interface/gigInterface";
import { IOrder } from "../../../interface/orderInterface";

interface IHandleGig {
    gigs: IGig[];
    categotys: ICategory[];
    orders:IOrder[];
    loading:boolean;
    error:string | null;
}
const initialState : IHandleGig = {
    gigs:[],
    categotys:[],
    orders:[],
    loading:false,
    error:null
}

export const userGetAllGigs = createAsyncThunk('user/get-all-gigs',
    async(_,{rejectWithValue}) => {
         try{
             const res = await userGetAllGigsApi();
             return res.data.gigs
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Gigs not fount !');
         }
    }
 );
export const userGetAllCategorys = createAsyncThunk('user/get-all-categorys',
    async(_,{rejectWithValue}) => {
         try{
             const res = await userGetAllCategorysApi();
             return res.data.category
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Gigs not fount !');
         }
    }
 );
export const userCreateOrder = createAsyncThunk('user/create-data',
    async(orderData : IOrder,{rejectWithValue}) => {
        console.log(orderData)
         try{
             const res = await userCreateOrderApi(orderData);
             return res.data.order
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Order not created !');
         }
    }
 );

 const userGigSlice = createSlice({
    name:"userHome",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        // Get all Gigs
        .addCase(userGetAllGigs.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(userGetAllGigs.fulfilled,(state, action:PayloadAction<IGig[]>) => {
            state.gigs = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(userGetAllGigs.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        //Get all Categorys
        .addCase(userGetAllCategorys.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(userGetAllCategorys.fulfilled,(state, action:PayloadAction<ICategory[]>) => {
            state.categotys = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(userGetAllCategorys.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})
export default userGigSlice.reducer