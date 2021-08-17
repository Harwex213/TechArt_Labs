import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refresh, register } from "../../actions/auth";

const initialState = {
    logIn: {
        status: "idle",
        error: null,
    },
    logOut: {
        status: "idle",
        error: null,
    },
    register: {
        status: "idle",
        error: null,
    },
    refresh: {
        status: "idle",
        error: null,
    },
};

export const authRequestsSlice = createSlice({
    name: "authRequests",
    initialState: initialState,
    extraReducers: {
        [logIn.pending]: (state, _) => {
            state.logIn.status = "pending";
        },
        [logIn.rejected]: (state, action) => {
            state.logIn.status = "rejected";
            state.logIn.error = action.payload ?? action.error.message;
        },
        [logIn.fulfilled]: (state, _) => {
            state.logIn.status = "fulfilled";
        },

        [logOut.pending]: (state, _) => {
            state.logOut.status = "pending";
        },
        [logOut.rejected]: (state, action) => {
            state.logOut.status = "rejected";
            state.logOut.error = action.payload ?? action.error.message;
        },
        [logOut.fulfilled]: (state, _) => {
            state.logOut.status = "fulfilled";
        },

        [register.pending]: (state, _) => {
            state.register.status = "pending";
        },
        [register.rejected]: (state, action) => {
            state.register.status = "rejected";
            state.register.error = action.payload ?? action.error.message;
        },
        [register.fulfilled]: (state, _) => {
            state.register.status = "fulfilled";
        },

        [refresh.pending]: (state, _) => {
            state.refresh.status = "pending";
        },
        [refresh.rejected]: (state, action) => {
            state.refresh.status = "rejected";
            state.refresh.error = action.payload ?? action.error.message;
        },
        [refresh.fulfilled]: (state, _) => {
            state.refresh.status = "fulfilled";
        },
    },
});

export const selectLogInRequest = (state) => state.requests.logIn;
export const selectLogOutRequest = (state) => state.requests.logOut;
export const selectRegisterRequest = (state) => state.requests.register;
export const selectRefreshRequest = (state) => state.requests.refresh;

export default authRequestsSlice.reducer;
