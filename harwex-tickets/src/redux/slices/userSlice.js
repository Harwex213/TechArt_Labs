import { createSlice } from "@reduxjs/toolkit";
import UserRoles from "../../config/constants/UserRoles";
import { logIn } from "../actions/auth";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        role: UserRoles.guest,
        username: "",
        firstname: "",
        lastname: "",
        dateOfBirth: "",
        phoneNumber: "",
    },
    extraReducers: {
        [logIn.fulfilled]: (state, action) => {
            state.role = action.payload;
        },
    },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
