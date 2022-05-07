import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../constants';
import { addNewShop } from './shopApis';

const initialState = {
    shopAuth: {},
    status: 'idle',
    error: '',
};

const shopSlice = createSlice({
    name: 'kemShops',
    initialState,
    reducers: {},
    extraReducers: {
        [addNewShop.pending]: (state) => {
            state.status = REQUEST_STATUS.PENDING;
        },
        [addNewShop.fulfilled]: (state, { payload }) => {
            state.status = REQUEST_STATUS.FULFILLED;
            state.shopAuth = payload;
        },
        [addNewShop.rejected]: (state) => {
            state.status = REQUEST_STATUS.REJECTED;
        },
    },
});

export default shopSlice.reducer;
export const shopInfo = (state) => state.reducer.shopReducers;
