import { createSlice } from "@reduxjs/toolkit";

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
    initialState: getUserInitialState(),
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
