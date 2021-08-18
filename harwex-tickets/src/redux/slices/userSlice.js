import { createSlice } from "@reduxjs/toolkit";
import { persistUser } from "../actions/user";

import { checkIsTokenExpired, getAccessToken } from "../../utils/tokens";
import { getLocalUser } from "../../utils/user";
import { UserInitialState } from "../../config/constants/User";

const getInitialState = () => {
    const accessToken = getAccessToken();
    const isTokenExpired = checkIsTokenExpired(accessToken);

    if (isTokenExpired) {
        return UserInitialState;
    } else {
        return getLocalUser() ?? UserInitialState;
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState: getInitialState(),
    extraReducers: {
        [persistUser.fulfilled]: (state, action) => (state = action.payload),
    },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
