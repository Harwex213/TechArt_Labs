import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/auth";
import jwtDecode from "jwt-decode";

export const logIn = createAsyncThunk("logIn", async ({ username, password }) => {
    const response = await authApi.login({ username, password });
    const tokens = await response.json();

    localStorage.setItem("accessToken", JSON.stringify(tokens.accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(tokens.refreshToken));

    const accessTokenDecoded = jwtDecode(tokens.accessToken);

    return accessTokenDecoded["Role"];
});

export const logOut = createAsyncThunk("logOut", async ({ username, password }) => {});

export const register = createAsyncThunk("register", async ({ username, password }) => {});

export const refresh = createAsyncThunk("refresh", async ({ username, password }) => {});
