import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { adminAddCategoryApi, adminDeleteCategoryApi, adminEditCategoryApi, adminGetAllCategoryApi } from "../../../api/AdminApi";
import { ICategory } from "../../../interface/categoryInterface";

interface IHandleCategory {
    categorys: ICategory[];
    loading:boolean;
    error:string | null;
}
const initialState : IHandleCategory = {
    categorys:[],
    loading:false,
    error:null
}

export const adminGetAllCategory = createAsyncThunk('admin/get-all-categorys',
    async(_,{rejectWithValue}) => {
         try{
             const res = await adminGetAllCategoryApi();
             return res.data.category
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Category not found !');
         }
    }
 );
export const adminAddCategory = createAsyncThunk('admin/add-categorys',
    async(category : FormData,{rejectWithValue}) => {
         try{
             const res = await adminAddCategoryApi(category);
             return res.data.category
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Category not found !');
         }
    }
 );
export const adminEditCategory = createAsyncThunk('admin/edit-category',
    async(category : FormData,{rejectWithValue}) => {
         try{
             const res = await adminEditCategoryApi(category);
             return res.data.category
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Category not Edited !');
         }
    }
 );
export const adminDeleteCategory = createAsyncThunk('admin/delete-category',
    async(categoryId : string,{rejectWithValue}) => {
         try{
             const res = await adminDeleteCategoryApi(categoryId);
             return res.data.category
         }catch(error : any){
             return rejectWithValue(error.response?.data?.message || 'Category not Edited !');
         }
    }
 );

const adminCategoryManagement = createSlice({
    name:"adminCategoryManagement",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        //Get all category
        .addCase(adminGetAllCategory.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminGetAllCategory.fulfilled,(state, action:PayloadAction<ICategory[]>) => {
            state.categorys = action.payload
            state.loading = false;
            state.error = null;
        })
        .addCase(adminGetAllCategory.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        //Add category
        .addCase(adminAddCategory.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminAddCategory.fulfilled,(state, action:PayloadAction<ICategory>) => {
            state.categorys.push(action.payload);
            state.loading = false;
            state.error = null;
        })
        .addCase(adminAddCategory.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        //Edit category
        .addCase(adminEditCategory.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminEditCategory.fulfilled,(state, action:PayloadAction<ICategory>) => {
            const {_id} = action.payload;
            const index = state.categorys.findIndex((category) => category._id === _id);
            state.categorys[index] = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(adminEditCategory.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })

        //Delete category
        .addCase(adminDeleteCategory.pending,(state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminDeleteCategory.fulfilled,(state, action:PayloadAction<ICategory>) => {
            const {_id} = action.payload;
            state.categorys = state.categorys.filter((category) => category._id !== _id);
            state.loading = false;
            state.error = null;
        })
        .addCase(adminDeleteCategory.rejected,(state, action:PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        })
        
    }
})
export default adminCategoryManagement.reducer