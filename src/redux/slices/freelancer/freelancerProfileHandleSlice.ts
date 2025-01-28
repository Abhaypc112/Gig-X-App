import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/userInterface";
import { freelancerEditByIdApi, freelancerGetByIdApi } from "../../../api/FreelancerApi";

interface IHandleProfile {
    freelancer:IUser;
    loading:boolean;
    error:null | string
}

const initialState : IHandleProfile = {
    freelancer:{},
    loading:false,
    error:null
}

export const freelancerGetById = createAsyncThunk('/freelancer/get-by-id',
    async(_,{rejectWithValue}) =>{
        try{
            const res = await freelancerGetByIdApi();
            return res.data;
        }catch(error : any){
            return rejectWithValue(error.response.data.message || "User not found !")
        }
    }
)
export const freelancerEditById = createAsyncThunk('/freelancer/edit-by-id',
    async(formData : FormData,{rejectWithValue}) =>{
        try{
            const res = await freelancerEditByIdApi(formData);
            return res.data;
        }catch(error : any){
            return rejectWithValue(error.response.data.message || "User not updated !")
        }
    }
)

const freelancerProfileHandleSlice = createSlice({
    name:"freelancerProfileHandleSlice",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        // Get freelancer
        .addCase(freelancerGetById.pending,(state)=>{
            state.loading = true;
        })
        .addCase(freelancerGetById.fulfilled,(state,action : PayloadAction <IUser>) => {
            state.freelancer = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerGetById.rejected,(state,action : PayloadAction <any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        // Get freelancer
        .addCase(freelancerEditById.pending,(state)=>{
            state.loading = true;
        })
        .addCase(freelancerEditById.fulfilled,(state,action : PayloadAction <IUser>) => {
            state.freelancer = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(freelancerEditById.rejected,(state,action : PayloadAction <any>) => {
            state.error = action.payload;
            state.loading = false;
        })

    }
})

export default freelancerProfileHandleSlice.reducer;