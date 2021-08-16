import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../actions/auth";

const initialState = {
    logIn: {
        status: "idle",
        error: null,
    },
};

export const actionRequestsStatusesSlice = createSlice({
    name: "actionRequestsStatuses",
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
    },
});

export const selectLogInRequest = (state) => state.requests.logInAction;

export default actionRequestsStatusesSlice.reducer;
