import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices';

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
