import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './slices/auth/Login';
import signUpReducer from './slices/auth/Signup';
import shopReducers from './slices/shop/shopSlices';

export const myReducers = combineReducers({
    loginReducer: loginReducer,
    signUpReducer: signUpReducer,
    shopReducers: shopReducers,
});
