import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { adminBlockUserApi, adminGetAllUsersApi } from "../../../api/AdminApi";
import { IUser } from "../../../interface/userInterface";

interface IuserHandle {
    users:IUser[];
    loading:boolean;
    error: string | null;
}

const initialState :IuserHandle = {
    users:[],
    loading:false,
    error:null,
}
export const adminGetAllUsers = createAsyncThunk('admin/get-all-users',
    async(_,{rejectWithValue}) => {
    try{
        const res = await adminGetAllUsersApi();
        return res.data.users;
    }catch(error:any){
        return rejectWithValue(error.response?.data?.message || 'User not fount');
    }
})
export const adminBlockUser = createAsyncThunk('admin/update-user',
    async(userId : object,{rejectWithValue}) => {
    try{
        const res = await adminBlockUserApi(userId);
        return res.data;
    }catch(error:any){
        return rejectWithValue(error.response?.data?.message || 'User not fount');
    }
})

const adminUserHandleSlice = createSlice({
    name:"adminUserManagemant",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        .addCase(adminGetAllUsers.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminGetAllUsers.fulfilled,(state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(adminGetAllUsers.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(adminBlockUser.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminBlockUser.fulfilled,(state, action:PayloadAction<IUser>) => {
            const {_id} = action.payload;
            const index = state.users.findIndex((user : IUser) => user._id === _id)
            state.users[index] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(adminBlockUser.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export const {} = adminUserHandleSlice.actions;
export default adminUserHandleSlice.reducer;