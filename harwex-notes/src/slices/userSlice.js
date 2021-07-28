import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUser from "../api/getUser";
import emptyRequest from "../api/emptyRequest";

export const logIn = createAsyncThunk("user/logIn", async ({ username, password }) => {
    const response = await getUser({ username, password });
    const isUserExist = (await response.json()).length !== 0;

    if (isUserExist) {
        localStorage.setItem("user", JSON.stringify({ username }));
    } else {
        throw new Error("User not exist or wrong password");
    }

    return username;
});

export const logOut = createAsyncThunk("user/logOut", async ({ username }) => {
    const response = await emptyRequest();
    if (response.ok) {
        localStorage.removeItem("user");
    }
    return await response.json();
});

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
    extraReducers: {
        [logIn.fulfilled]: (state, action) => {
            state.isGuest = false;
            state.username = action.payload;
        },
        [logOut.fulfilled]: (state, _) => {
            state.isGuest = true;
            state.username = "guest";
        },
    },
});

export const selectIsGuest = (state) => state.user.isGuest;
export const selectUserName = (state) => state.user.username;

export default userSlice.reducer;
