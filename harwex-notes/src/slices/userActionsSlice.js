import { createSlice } from "@reduxjs/toolkit";

import { userActions } from "../config/constants/userActions";

const userActionsSlice = createSlice({
    name: "currentUserAction",
    initialState: userActions.none,
    reducers: {
        none: (state) => (state = userActions.none),
        profile: (state) => (state = userActions.profile),
        authorization: (state) => (state = userActions.authorization),
        registration: (state) => (state = userActions.registration),
    },
});

export const { none, profile, authorization, registration } = userActionsSlice.actions;

export const selectCurrentAction = (state) => state.currentUserAction;

export default userActionsSlice.reducer;
