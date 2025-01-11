import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { adminGetAllUsersApi, adminUpdateUserApi } from "../../../api/AdminApi";

interface IuserHandle {
    users:any | null;
    loading:boolean;
    error: string | null;
}
interface Iusers {
    _id:string;
    name:string;
    email:string;
    role:string;
    skills:[string];
    experience:string;
}
const initialState :IuserHandle = {
    users:null,
    loading:false,
    error:null,
}
export const adminGetAllUsers = createAsyncThunk('admin/get-all-users',
    async(_,{rejectWithValue}) => {
    try{
        const users = await adminGetAllUsersApi();
        return users;
    }catch(error:any){
        return rejectWithValue(error.response?.data?.message || 'User not fount');
    }
})
export const adminUpdateUser = createAsyncThunk('admin/update-user',
    async(userId : object,{rejectWithValue}) => {
    try{
        const users = await adminUpdateUserApi(userId);
        return users;
    }catch(error:any){
        return rejectWithValue(error.response?.data?.message || 'User not fount');
    }
})

const userHandleSlice = createSlice({
    name:"userManagemant",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        .addCase(adminGetAllUsers.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminGetAllUsers.fulfilled,(state, action:PayloadAction<any>) => {
            state.users = action.payload.data.users
            state.loading = false;
            state.error = null;
        })
        .addCase(adminGetAllUsers.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(adminUpdateUser.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminUpdateUser.fulfilled,(state, action:PayloadAction<any>) => {
            const {_id} = action.payload.data;
            const index = state.users.findIndex((user : Iusers) => user._id === _id)
            state.users[index] = action.payload.data;
            state.loading = false;
            state.error = null;
        })
        .addCase(adminUpdateUser.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {} = userHandleSlice.actions;
export default userHandleSlice.reducer;