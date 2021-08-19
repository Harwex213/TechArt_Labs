import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import authApi from "../../api/auth";
import { persistUser } from "./user";

import jwtDecode from "jwt-decode";
import { deleteTokens, getAccessToken, getRefreshToken, saveTokens } from "../../utils/tokens";
import { UserInitialState } from "../../config/constants/User";
import { validateResponse } from "../../utils/response";

export const login = createAsyncThunk("login", async ({ username, password }, thunkAPI) => {
    const response = await authApi.login({ username, password });
    const data = await response.json();
    validateResponse(response, data);

    saveTokens(data.accessToken, data.refreshToken);

    const accessTokenDecoded = jwtDecode(data.accessToken);
    thunkAPI.dispatch(
        persistUser({
            id: accessTokenDecoded["id"],
            username: accessTokenDecoded["Name"],
            role: accessTokenDecoded["Role"],
        })
    );
});

export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
    const accessToken = getAccessToken();
    await authApi.logout({ accessToken });
    deleteTokens();
    thunkAPI.dispatch(persistUser(UserInitialState));
});

export const register = createAsyncThunk(
    "register",
    async ({ username, phoneNumber, password, confirmPassword }, thunkAPI) => {
        const response = await authApi.register({ username, phoneNumber, password, confirmPassword });
        validateResponse(response, await response.json());

        const loginResult = await thunkAPI.dispatch(login({ username, password }));
        unwrapResult(loginResult);
    }
);

export const refresh = createAsyncThunk("refresh", async (_, thunkAPI) => {
    const refreshToken = getRefreshToken();
    const response = await authApi.refresh({ refreshToken });
    const data = await response.json();
    validateResponse(response, data);

    saveTokens(data.accessToken, data.refreshToken);

    const accessTokenDecoded = jwtDecode(data.accessToken);
    thunkAPI.dispatch(
        persistUser({
            id: accessTokenDecoded["id"],
            username: accessTokenDecoded["Name"],
            role: accessTokenDecoded["Role"],
        })
    );
});
