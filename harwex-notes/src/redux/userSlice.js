import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut } from "./actions/auth";
import { registerUser } from "./actions/reg";

const getUserInitialState = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return user
        ? {
              isGuest: false,
              username: user.username,
          }
        : {
              isGuest: true,
              username: "guest",
          };
};

export const userSlice = createSlice({
    name: "user",
    initialState: {
        data: getUserInitialState(),
        logInAction: {
            status: "idle",
            error: null,
        },
        logOutAction: {
            status: "idle",
            error: null,
        },
        registerAction: {
            status: "idle",
            error: null,
        },
    },
    extraReducers: {
        [logIn.pending]: (state, _) => {
            state.logInAction.status = "pending";
        },
        [logIn.rejected]: (state, action) => {
            state.logInAction.status = "rejected";
            state.logInAction.error = action.payload ?? action.error.message;
        },
        [logIn.fulfilled]: (state, action) => {
            state.logInAction.status = "fulfilled";

            state.data.isGuest = false;
            state.data.username = action.payload;
        },

        [logOut.pending]: (state, _) => {
            state.logOutAction.status = "pending";
        },
        [logOut.rejected]: (state, action) => {
            state.logOutAction.status = "rejected";
            state.logOutAction.error = action.payload ?? action.error.message;
        },
        [logOut.fulfilled]: (state, _) => {
            state.logOutAction.status = "fulfilled";

            state.data.isGuest = true;
            state.data.username = "guest";
        },

        [registerUser.pending]: (state, _) => {
            state.registerAction.status = "pending";
        },
        [registerUser.rejected]: (state, action) => {
            state.registerAction.status = "rejected";
            state.registerAction.error = action.payload ?? action.error.message;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.registerAction.status = "fulfilled";

            state.data.isGuest = false;
            state.data.username = action.payload.username;
        },
    },
});

export const selectIsGuest = (state) => state.user.data.isGuest;
export const selectUserName = (state) => state.user.data.username;
export const selectLogInStatus = (state) => state.user.logInAction;
export const selectLogOutStatus = (state) => state.user.logOutAction;
export const selectRegisterStatus = (state) => state.user.registerAction;

export default userSlice.reducer;
