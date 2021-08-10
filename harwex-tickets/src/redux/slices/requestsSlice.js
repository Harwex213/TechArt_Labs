import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../actions/auth";

const initialState = {
    logInAction: {
        status: "idle",
        error: null,
    },
};

export const requestsSlice = createSlice({
    name: "requests",
    initialState: initialState,
    extraReducers: {
        [logIn.pending]: (state, _) => {
            state.logInAction.status = "pending";
        },
        [logIn.rejected]: (state, action) => {
            state.logInAction.status = "rejected";
            state.logInAction.error = action.payload ?? action.error.message;
        },
        [logIn.fulfilled]: (state, _) => {
            state.logInAction.status = "fulfilled";
        },
    },
});

export const selectLogInRequest = (state) => state.requests.logInAction;

export default requestsSlice.reducer;
