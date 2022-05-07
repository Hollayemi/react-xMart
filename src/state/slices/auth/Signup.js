import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../constants';
import martApi from '../../api/baseApi';

export const RegNewUser = createAsyncThunk(
    'post/RegNewUser',
    async (payload) => {
        console.log(payload);
        const { data } = await martApi.post('/createAcc', { payload }, {});
        return data;
    }
);

const initialState = {
    regAuth: {},
    status: 'idle',
    info: {},
};

const UserSlice = createSlice({
    name: 'xMartSignup',
    initialState,
    reducers: {},
    extraReducers: {
        [RegNewUser.pending]: (state) => {
            state.status = REQUEST_STATUS.PENDING;
        },
        [RegNewUser.fulfilled]: (state, { payload }) => {
            state.status = REQUEST_STATUS.FULFILLED;
            state.regAuth = payload;
        },
        [RegNewUser.rejected]: (state) => {
            state.status = REQUEST_STATUS.REJECTED;
        },
    },
});

export const { setUsers } = UserSlice.actions;

// export states
export const sendUserAuth = (state) => state.reducer.signUpReducer;
export default UserSlice.reducer;
