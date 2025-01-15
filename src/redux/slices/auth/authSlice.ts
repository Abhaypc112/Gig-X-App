import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { googleAuthApi, loginUserApi, signupUserApi, userLogOutApi, userOtApi } from '../../../api/authApi';
import { RootState } from '../../store';

interface AuthState {
    user: any | null;
    accessToken: string | null;
    loading: boolean;
    error: string | null;
  }
  interface IsignupData {
    name: string;
    email: string;
    password: string;
    conformPassword:string;
    otp: string;
  }
 const initialState : AuthState = {
    user: null,
    accessToken: null,
    loading: false,
    error: null,
 }

 export const signupUser = createAsyncThunk('auth/signupUser',
    async (signupData: IsignupData, { rejectWithValue }) => {
      try {
        const response = await signupUserApi(signupData);
        return response.data.userData;
      } catch (error: any) {
        console.log(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || 'Signup failed');
      }
    }
  );
 export const generateOtp = createAsyncThunk('user/otp',
    async (email: string, { rejectWithValue }) => {
      try {
        const response = await userOtApi(email);
        return response.data;
      } catch (error: any) {
        console.log(error.response?.data?.message)
        return rejectWithValue(error.response?.data?.message || 'Signup failed');
      }
    }
  );

  export const loginUser = createAsyncThunk('auth/loginUser',
    async (loginData: { email: string; password: string }, { rejectWithValue }) => {
      try {
        const response = await loginUserApi(loginData);
        console.log(response.data.userData);
        
        return response.data.userData;
      } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
      }
    }
  );
  export const userLogOut = createAsyncThunk('/user/log-out',
    async (_, { rejectWithValue }) => {
      try {
        const response = await userLogOutApi();
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'LogOut failed');
      }
    }
  );
  export const googleAuth = createAsyncThunk('auth/google',
    async (idToken: string, { rejectWithValue }) => {
      try {
        const response = await googleAuthApi(idToken);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || 'Google authentication failed');
      }
    }
  );
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            localStorage.removeItem('accessToken');
          },
    },
    extraReducers : (builder) => {
    builder

    // Signup cases
    .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('role', action.payload.user.role);
      })
      .addCase(signupUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login case
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('role', action.payload.user.role);
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Generate OTP
      .addCase(generateOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(generateOtp.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Log out
      .addCase(userLogOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogOut.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('role');
      })
      .addCase(userLogOut.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Google Auth
      .addCase(googleAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleAuth.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(googleAuth.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
    }
})

export const {logout} = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;