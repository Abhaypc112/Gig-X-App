import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IGig } from "../../../interface/gigInterface";
import { freelancerCreateGigApi, freelancerDeleteGigApi, freelancerEditGigApi, freelancerGetAllCategoryApi, freelancerGetAllGigsApi, freelancerUpdateGigStatausApi } from "../../../api/FreelancerApi";


interface IHandleGig {
    categorys:ICategory[]
    gigs: IGig[];
    loading:boolean;
    error:string | null;
}
const initialState : IHandleGig = {
    categorys:[],
    gigs:[],
    loading:false,
    error:null
}

export const createGig = createAsyncThunk('freelancer/create-gig',
   async(FormData : FormData,{rejectWithValue}) => {
        try{
            const res = await freelancerCreateGigApi(FormData)
            return res.data
        }catch(error : any){
            return rejectWithValue(error.response?.data?.message || 'Create Gig Failed !');
        }
   }
)
export const freelancerGetAllGigs = createAsyncThunk('freelancer/get-all-gigs',
   async(_,{rejectWithValue}) => {
        try{
            const res = await freelancerGetAllGigsApi()
            return res.data
        }catch(error : any){
            return rejectWithValue(error.response?.data?.message || 'Find Gig Failed !');
        }
   }
)
export const freelancerUpdateGigStataus = createAsyncThunk('freelancer/update-gig-status',
   async(gigId : object,{rejectWithValue}) => {
        try{
            const res = await freelancerUpdateGigStatausApi(gigId)
            return res.data
        }catch(error : any){
            return rejectWithValue(error.response?.data?.message || 'Gig Update Failed !');
        }
   }
)
export const freelancerEditGig = createAsyncThunk('freelancer/edit-gig',
    async(FormData : FormData,{rejectWithValue}) => {
         try{
             const res = await freelancerEditGigApi(FormData)
             return res.data
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Update Gig Failed !');
         }
    }
 )
 export const freelancerDeleteGig = createAsyncThunk('freelancer/delete-gig',
    async(gigId : object,{rejectWithValue}) => {
         try{
             const res = await freelancerDeleteGigApi(gigId)
             return res.data
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Gig Update Failed !');
         }
    }
 )
 export const freelancerGetAllCategory = createAsyncThunk('freelancer/get-all-category',
    async(_,{rejectWithValue}) => {
         try{
             const res = await freelancerGetAllCategoryApi()
             return res.data
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Gig Update Failed !');
         }
    }
 )
const manageGigSlice = createSlice({
    name:"freeiancerManageGig",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        // Create Gig
        .addCase(createGig.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createGig.fulfilled,(state, action:PayloadAction<IGig>) => {
            state.gigs.push(action.payload)
            state.loading = false;
            state.error = null;
        })
        .addCase(createGig.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        // Get All Gigs
        .addCase(freelancerGetAllGigs.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(freelancerGetAllGigs.fulfilled,(state, action:PayloadAction<IGig[]>) => {
            state.gigs = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerGetAllGigs.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        // Update gig status
        .addCase(freelancerUpdateGigStataus.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(freelancerUpdateGigStataus.fulfilled,(state, action:PayloadAction<IGig>) => {
            const {_id} = action.payload;
            const index = state.gigs.findIndex((gig : IGig) => gig._id === _id)
            state.gigs[index] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerUpdateGigStataus.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        // Edit gig
        .addCase(freelancerEditGig.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(freelancerEditGig.fulfilled,(state, action:PayloadAction<IGig>) => {
            console.log(action.payload)
            const {_id} = action.payload;
            const index = state.gigs.findIndex((gig : IGig) => gig._id === _id)
            state.gigs[index] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerEditGig.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        // Delete gig
        .addCase(freelancerDeleteGig.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(freelancerDeleteGig.fulfilled,(state, action:PayloadAction<IGig>) => {
            const {_id} = action.payload;
            state.gigs = state.gigs.filter((gig : IGig) => gig._id !== _id)
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerDeleteGig.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        // Get all categorys
        .addCase(freelancerGetAllCategory.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(freelancerGetAllCategory.fulfilled,(state, action:PayloadAction<ICategory[]>) => {
            state.categorys = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerGetAllCategory.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export default manageGigSlice.reducer;