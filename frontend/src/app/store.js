import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import transacReducer from '../features/transactions/transacSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transacs: transacReducer
  },
});
