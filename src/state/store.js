import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './RootReducers';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './slices/auth/AuthSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
