import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/auth";
import jwtDecode from "jwt-decode";
import { deleteTokens, getAccessToken, getRefreshToken, saveTokens } from "../../utils/tokens";

export const logIn = createAsyncThunk("logIn", async ({ username, password }) => {
    const response = await authApi.login({ username, password });
    const tokens = await response.json();

    saveTokens(tokens.accessToken, tokens.refreshToken);

    const accessTokenDecoded = jwtDecode(tokens.accessToken);
    return accessTokenDecoded["Role"];
});

export const logOut = createAsyncThunk("logOut", async () => {
    const accessToken = getAccessToken();
    await authApi.logout({ accessToken });
    deleteTokens();
});

export const register = createAsyncThunk(
    "register",
    async ({ username, phoneNumber, password, confirmPassword }) => {
        await authApi.register({ username, phoneNumber, password, confirmPassword });
        const response = await authApi.login({ username, password });
        const tokens = await response.json();

        saveTokens(tokens.accessToken, tokens.refreshToken);

        const accessTokenDecoded = jwtDecode(tokens.accessToken);
        return {
            role: accessTokenDecoded["Role"],
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
    const tokens = await response.json();

    saveTokens(tokens.accessToken, tokens.refreshToken);

    const accessTokenDecoded = jwtDecode(tokens.accessToken);
    return accessTokenDecoded["Role"];
});
