import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGig } from "../../../interface/gigInterface";
import { adminBlockGigApi, adminGetAllGigsApi } from "../../../api/AdminApi";

interface IHandleGig {
    gigs: IGig[];
    loading:boolean;
    error:string | null;
}
const initialState : IHandleGig = {
    gigs:[],
    loading:false,
    error:null
}

export const adminGetAllGigs = createAsyncThunk('freelancer/get-all-gigs',
    async(_,{rejectWithValue}) => {
         try{
             const res = await adminGetAllGigsApi()
             return res.data
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Gigs not fount !');
         }
    }
 );
export const adminBlockGig = createAsyncThunk('admin/update-user',
    async(gigId : object,{rejectWithValue}) => {
    try{
        const res = await adminBlockGigApi(gigId);
        return res.data;
    }catch(error:any){
        return rejectWithValue(error.response?.data?.message || 'Gig not fount');
    }
})

const adminManageGigSlice = createSlice({
    name:"adminManageGigs",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(adminGetAllGigs.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminGetAllGigs.fulfilled,(state, action:PayloadAction<IGig[]>) => {
            state.gigs = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(adminGetAllGigs.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(adminBlockGig.pending,(state) => {
                state.loading = true;
                state.error = null;
        })
        .addCase(adminBlockGig.fulfilled,(state, action:PayloadAction<IGig>) => {
            const {_id} = action.payload;
            const index = state.gigs.findIndex((gig : IGig) => gig._id === _id)
            state.gigs[index] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(adminBlockGig.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})
export default adminManageGigSlice.reducer