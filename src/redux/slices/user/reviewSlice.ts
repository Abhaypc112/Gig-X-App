import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IReview } from "../../../interface/reviewInterface";
import { addGigRatingApi, getGigReviewByIdApi } from "../../../api/userApi";

interface IHandleReview {
    reviews:IReview[];
    loading:boolean;
    error:string | null;
}
const initialState : IHandleReview = {
    reviews: [],
    loading:false,
    error:null
}

export const userAddGigRating = createAsyncThunk('/user/create-review',
    async(reviewData : IReview,{rejectWithValue}) => {
         try{
             const res = await addGigRatingApi(reviewData);
             return res.data
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Review not created !');
         }
    }
 );
export const getGigReviewById = createAsyncThunk('/user/get-all-review-by-gigId',
    async(gigId : string,{rejectWithValue}) => {
         try{
             const res = await getGigReviewByIdApi(gigId);
             return res.data.review
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Review not found !');
         }
    }
 );


export const userReviewSlice = createSlice({
    name:"userReviewSlice",
    initialState,
    reducers:{},
    extraReducers:(builder) => {    
        builder

    //Create review
    .addCase(userAddGigRating.pending,(state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(userAddGigRating.fulfilled,(state, action:PayloadAction<IReview>) => {
        state.reviews.push(action.payload)
        state.loading = false;
        state.error = null;
    })
    .addCase(userAddGigRating.rejected,(state, action:PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
    })

    //Get all review by gigId
    .addCase(getGigReviewById.pending,(state) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(getGigReviewById.fulfilled,(state, action:PayloadAction<IReview[]>) => {
        state.reviews = action.payload
        state.loading = false;
        state.error = null;
    })
    .addCase(getGigReviewById.rejected,(state, action:PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
    })
    }
})

export default userReviewSlice.reducer;