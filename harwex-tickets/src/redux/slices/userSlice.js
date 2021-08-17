import { createSlice } from "@reduxjs/toolkit";
import UserRoles from "../../config/constants/UserRoles";
import { logIn, register } from "../actions/auth";

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
        [register.fulfilled]: (state, action) => {
            state.role = action.payload.role;
            state.username = action.payload.username;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.dateOfBirth = action.payload.dateOfBirth;
            state.phoneNumber = action.payload.phoneNumber;
        },
    },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
