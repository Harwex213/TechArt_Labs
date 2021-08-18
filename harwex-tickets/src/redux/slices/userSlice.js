import { createSlice } from "@reduxjs/toolkit";
import { login, refresh, register } from "../actions/auth";
import { checkAccessTokenOnExp, getAccessToken } from "../../utils/tokens";
import UserRoles from "../../config/constants/UserRoles";
import userPersist from "../../utils/user";

const initialState = {
    userId: -1,
    role: UserRoles.guest,
    username: "",
    firstname: "",
    lastname: "",
    dateOfBirth: "",
    phoneNumber: "",
};

const getInitialState = () => {
    const accessToken = getAccessToken();
    const isTokenExpired = checkAccessTokenOnExp(accessToken);

    if (isTokenExpired) {
        return initialState;
    } else {
        return userPersist.getUser();
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState: getInitialState(),
    extraReducers: {
        [login.fulfilled]: (state, action) => (state = action.payload),
        [register.fulfilled]: (state, action) => (state = action.payload),
        [refresh.fulfilled]: (state, action) => {
            state.id = action.payload.id;
            state.role = action.payload.role;
            state.username = action.payload.username;
        },
    },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
