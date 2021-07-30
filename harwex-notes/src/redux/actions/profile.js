import { createAsyncThunk } from "@reduxjs/toolkit";
import getUser from "../../api/getUser";

export const fetchUserProfile = createAsyncThunk("fetchUserProfile", async ({ username }, thunkAPI) => {
    try {
        const regResponse = await getUser({ username });
        const data = await regResponse.json();

        if (data.length === 0) {
            throw new Error("User doesn't exist");
        }

        return {
            firstname: data[0].firstname,
            lastname: data[0].lastname,
            dateOfBirth: data[0].dateOfBirth,
            email: data[0].email,
        };
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
