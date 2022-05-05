import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import xMartApi from '../../api/baseApi';
import { REQUEST_STATUS } from './constants';

export const fetchuser = createAsyncThunk('post/fetchuser', async (payload) => {
    const data = await xMartApi.post(
        '/view/627123624c7636d7863c7e75/brands/62725cb9cf8718ee5daba127',
        payload
    );
    return data;
});

const initialState = {
    loginAuth: { name: 'holla' },
    status: 'idle',
    data: null,
};

const UserSlice = createSlice({
    name: 'xMartUser',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchuser.pending]: (state) => {
            state.status = REQUEST_STATUS.PENDING;
        },
        [fetchuser.fulfilled]: (state, { payload }) => {
            state.status = REQUEST_STATUS.FULFILLED;
            state.data = payload;
        },
        [fetchuser.rejected]: (state) => {
            state.status = REQUEST_STATUS.REJECTED;
        },
    },
});

export const { setUsers } = UserSlice.actions;
// export states
export const sendUserAuth = (state) => state.xMart.loginAuth;
export default UserSlice.reducer;
