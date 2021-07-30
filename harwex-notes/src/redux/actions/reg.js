import { createAsyncThunk } from "@reduxjs/toolkit";
import getUser from "../../api/getUser";
import regUser from "../../api/createUser";

export const registerUser = createAsyncThunk(
    "registerUser",
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
