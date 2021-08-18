import { createAsyncThunk } from "@reduxjs/toolkit";

import { getLocalUser, saveLocalUser } from "../../utils/user";
import { UserInitialState } from "../../config/constants/User";

export const persistUser = createAsyncThunk(
    "persistUser",
    ({ id, role, username, firstname, lastname, dateOfBirth, phoneNumber }) => {
        const userParams = { id, role, username, firstname, lastname, dateOfBirth, phoneNumber };
        const filteredEntries = Object.entries(userParams).filter(([_, value]) => value);
        const definedParams = Object.fromEntries(filteredEntries);

        const user = {
            ...(getLocalUser() ?? UserInitialState),
            ...definedParams,
        };

        saveLocalUser(user);
        return user;
    }
);
