import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isGuest: true,
        username: "guest",
        password: null,
    },
    reducers: {
        logIn: (state, action) => {
            state.isGuest = false;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        logOut: (state) => {
            state.isGuest = true;
            state.username = "guest";
            state.password = null;
        },
    },
});

export const { logIn, logOut } = userSlice.actions;

export const selectIsGuest = (state) => state.user.isGuest;
export const selectUserName = (state) => state.user.username;
export const selectPassword = (state) => state.user.password;

export default userSlice.reducer;
