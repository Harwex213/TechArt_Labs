import { createAsyncThunk } from "@reduxjs/toolkit";

export const logIn = createAsyncThunk("logIn", async ({ username, password }) => {
    const response = await getUser();
    const isUserExist = (await response.json()).length !== 0;

    if (isUserExist) {
        localStorage.setItem("user", JSON.stringify({ username }));
    } else {
        throw new Error("User not exist or wrong password");
    }

    return username;
});
