import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../interface/userInterface";
import { editUserApi, getUserApi } from "../../../api/userApi";

interface IUserProfile {
    user:IUser;
    loading:boolean;
    error: null | string;
}
const initialState : IUserProfile = {
    user : {},
    loading : false,
    error : null
}

export const editUser = createAsyncThunk('/user/edit-user',
    async(formData : FormData,{rejectWithValue}) =>{
        try{
            const res = await editUserApi(formData);
            return res.data.user;
        }catch(error : any){
            return rejectWithValue(error.response.data.message || "User not updated !")
        }
    }
)
export const getUser = createAsyncThunk('/user/get-data',
    async(_,{rejectWithValue}) =>{
        try{
            const res = await getUserApi();
            return res.data.user;
        }catch(error : any){
            return rejectWithValue(error.response.data.message || "User not found !")
        }
    }
)

export const userProfileSlice = createSlice({
    name:"userProfileSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder

         // Update User
        .addCase(editUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(editUser.fulfilled,(state,action : PayloadAction <IUser>) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(editUser.rejected,(state,action : PayloadAction <any>) => {
            state.error = action.payload;
            state.loading = false;
        })

         // Get User
        .addCase(getUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getUser.fulfilled,(state,action : PayloadAction <IUser>) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(getUser.rejected,(state,action : PayloadAction <any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export default userProfileSlice.reducer;