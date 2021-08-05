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
    extraReducers: {},
});

export const selectIsGuest = (state) => state.user.isGuest;
export const selectUserName = (state) => state.user.username;

export default userSlice.reducer;
