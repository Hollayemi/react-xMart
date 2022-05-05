import { configureStore } from '@reduxjs/toolkit';
import kemonReducer from './slices/auth/AuthSlice';

export const store = configureStore({
    reducer: {
        reducer: kemonReducer,
    },
});
