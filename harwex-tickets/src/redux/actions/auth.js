import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import authApi from "../../api/auth";
import jwtDecode from "jwt-decode";
import { deleteTokens, getAccessToken, getRefreshToken, saveTokens } from "../../utils/tokens";

export const login = createAsyncThunk("login", async ({ username, password }) => {
    const response = await authApi.login({ username, password });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data["errorMessages"]);
    }

    saveTokens(data.accessToken, data.refreshToken);

    const accessTokenDecoded = jwtDecode(data.accessToken);
    return {
        username: accessTokenDecoded["Name"],
        role: accessTokenDecoded["Role"],
    };
});

export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
    const accessToken = getAccessToken();
    const response = await authApi.logout({ accessToken });
    if (!response.ok) {
        const result = await thunkAPI.dispatch(refresh());
        unwrapResult(result);
        await authApi.logout({ accessToken });
    }
    deleteTokens();
});

export const register = createAsyncThunk(
    "register",
    async ({ username, phoneNumber, password, confirmPassword }, thunkAPI) => {
        const regResponse = await authApi.register({ username, phoneNumber, password, confirmPassword });
        if (!regResponse.ok) {
            const error = await regResponse.json();
            throw new Error(error["errorMessages"]);
        }

        const result = await thunkAPI.dispatch(login({ username, password }));
        unwrapResult(result);

        return {
            role: result.payload.role,
            username,
            firstname: "",
            lastname: "",
            dateOfBirth: "",
            phoneNumber,
        };
    }
);

export const refresh = createAsyncThunk("refresh", async () => {
    const refreshToken = getRefreshToken();
    const response = await authApi.refresh({ refreshToken });
    if (!response.ok) {
        throw new Error("Unauthorized");
    }

    const tokens = await response.json();

    saveTokens(tokens.accessToken, tokens.refreshToken);

    const accessTokenDecoded = jwtDecode(tokens.accessToken);
    return accessTokenDecoded["Role"];
});

export const persistUser = createAsyncThunk("persistUser", async () => {
    // const accessToken = getAccessToken();
    // const isTokenExpired = checkAccessTokenOnExp(accessToken);
    //
    // if (isTokenExpired) {
    //     return userInitialState;
    // } else {
    //     const refreshToken = getRefreshToken();
    // }
    //
    // const accessTokenDecoded = jwtDecode(tokens.accessToken);
    // return accessTokenDecoded["Role"];
});
