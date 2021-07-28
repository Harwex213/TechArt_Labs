import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUser from "../api/getUser";
import regUser from "../api/createUser";

export const fetchUserProfile = createAsyncThunk("profile/fetchUserProfile", async ({ username }) => {
    const response = await getUser({ username });
    const data = await response.json();

    return {
        firstname: data[0].firstname,
        lastname: data[0].lastname,
        dateOfBirth: data[0].dateOfBirth,
        email: data[0].email,
    };
});

export const registerUser = createAsyncThunk(
    "profile/registerUser",
    async ({ id, username, firstname, lastname, dateOfBirth, email, password }) => {
        const response = await getUser({ username });
        const isUserExist = (await response.json()).length !== 0;

        if (!isUserExist) {
            await regUser({ id, username, firstname, lastname, dateOfBirth, email, password });
        } else {
            throw new Error("Username taken");
        }

        return {
            firstname: firstname,
            lastname: lastname,
            dateOfBirth: dateOfBirth,
            email: email,
        };
    }
);

const initialState = {
    profile: {
        firstname: null,
        lastname: null,
        dateOfBirth: null,
        email: null,
    },
    status: "idle",
    error: null,
};

export const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    extraReducers: {
        [fetchUserProfile.pending]: (state, _) => {
            state.status = "loading";
        },
        [fetchUserProfile.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        },
        [fetchUserProfile.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.profile = action.payload;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.profile = action.payload;
        },
    },
});

export default profileSlice.reducer;
