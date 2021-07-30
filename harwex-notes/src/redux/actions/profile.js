import { createAsyncThunk } from "@reduxjs/toolkit";
import getUser from "../../api/getUser";

export const fetchUserProfile = createAsyncThunk("fetchUserProfile", async ({ username }) => {
    const regResponse = await getUser({ username });
    const data = await regResponse.json();

    return {
        firstname: data[0]?.firstname ?? null,
        lastname: data[0]?.lastname ?? null,
        dateOfBirth: data[0]?.dateOfBirth ?? null,
        email: data[0]?.email ?? null,
    };
});
