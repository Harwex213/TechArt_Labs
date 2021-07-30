import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./actions/profile";
import { registerUser } from "./actions/reg";
import { logOut } from "./actions/auth";

const initialState = {
    firstname: null,
    lastname: null,
    dateOfBirth: null,
    email: null,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        data: initialState,
        fetchProfileAction: {
            status: "idle",
            error: null,
        },
    },
    reducers: {},
    extraReducers: {
        [fetchUserProfile.pending]: (state, _) => {
            state.fetchProfileAction.status = "pending";
        },
        [fetchUserProfile.rejected]: (state, action) => {
            state.fetchProfileAction.status = "rejected";
            state.fetchProfileAction.error = action.payload ?? action.error.message;
        },
        [fetchUserProfile.fulfilled]: (state, action) => {
            state.fetchProfileAction.status = "fulfilled";

            state.data = action.payload;
        },

        [registerUser.fulfilled]: (state, action) => {
            state.data = action.payload;
        },

        [logOut.fulfilled]: (state, _) => {
            state.data = initialState;
        },
    },
});

export const selectProfileData = (state) => state.profile.data;
export const selectFetchProfileStatus = (state) => state.profile.fetchProfileAction;

export default profileSlice.reducer;
