import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from './slices/auth/AuthSlice';

export const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
});
