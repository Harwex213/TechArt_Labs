import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isGuest: true,
        username: "guest",
    },
    reducers: {
        logIn: (state, action) => {
            state.isGuest = false;
            state.username = action.payload;
        },
        logOut: (state) => {
            state.isGuest = true;
            state.username = "guest";
        },
    },
});

export const { logIn, logOut } = userSlice.actions;

export const selectIsGuest = (state) => state.user.isGuest;
export const selectUserName = (state) => state.user.username;
export const selectPassword = (state) => state.user.password;

export default userSlice.reducer;
