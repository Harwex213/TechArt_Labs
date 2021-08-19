import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "../../actions/auth";

const initialState = {
    status: "idle",
    error: null,
};

export const authRequestsSlice = createSlice({
    name: "authRequests",
    initialState: {
        logIn: initialState,
        logOut: initialState,
        register: initialState,
        refresh: initialState,
    },
    extraReducers: {
        [login.pending]: (state, _) => {
            state.logIn.status = "pending";
        },
        [login.rejected]: (state, action) => {
            state.logIn.status = "rejected";
            state.logIn.error = action.payload ?? action.error.message;
        },
        [login.fulfilled]: (state, _) => {
            state.logIn.status = "fulfilled";

            state.logOut = initialState;
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

            state.logOut = initialState;
        },

        [logout.pending]: (state, _) => {
            state.logOut.status = "pending";
        },
        [logout.rejected]: (state, action) => {
            state.logOut.status = "rejected";
            state.logOut.error = action.payload ?? action.error.message;
        },
        [logout.fulfilled]: (state, _) => {
            state.logOut.status = "fulfilled";

            state.logIn = initialState;
            state.register = initialState;
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

            state.logOut = initialState;
        },
    },
});

export const selectLogInRequest = (state) => state.authRequests.logIn;
export const selectLogOutRequest = (state) => state.authRequests.logOut;
export const selectRegisterRequest = (state) => state.authRequests.register;
export const selectRefreshRequest = (state) => state.authRequests.refresh;

export default authRequestsSlice.reducer;
