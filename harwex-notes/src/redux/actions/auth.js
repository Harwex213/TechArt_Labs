import { createAsyncThunk } from "@reduxjs/toolkit";
import getUser from "../../api/getUser";
import emptyRequest from "../../api/emptyRequest";

export const logIn = createAsyncThunk("logIn", async ({ username, password }) => {
    const response = await getUser({ username, password });
    const isUserExist = (await response.json()).length !== 0;

    if (isUserExist) {
        localStorage.setItem("user", JSON.stringify({ username }));
    } else {
        throw new Error("User not exist or wrong password");
    }

    return username;
});

export const logOut = createAsyncThunk("logOut", async ({ username }) => {
    const response = await emptyRequest();
    if (response.ok) {
        localStorage.removeItem("user");
    }
    return await response.json();
});
