import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  authLogin,
  authRegisterWithEmailAndPassword,
  authThunkWithGoogle,
  logoutThunk,
} from '../thunks/auth.thunk';

import type { authState } from '../../types';

const initialState: authState = {
  isAuth: false,
  error: null,
  loading: false,
  userData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        uid: string;
        displayName: string;
        photoURL: string;
      }>
    ) => {
      state.isAuth = true;
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authThunkWithGoogle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authThunkWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.userData = action.payload?.userData;
      state.error = null;
    });
    builder.addCase(authThunkWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(logoutThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.loading = false;
      state.isAuth = false;
      state.userData = null;
      state.error = null;
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(authRegisterWithEmailAndPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      authRegisterWithEmailAndPassword.fulfilled,
      (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.userData = action.payload?.userData;
        state.error = null;
      }
    );
    builder.addCase(
      authRegisterWithEmailAndPassword.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      }
    );
    builder.addCase(authLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.userData = action.payload?.userData;
      state.error = null;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { login } = authSlice.actions;
