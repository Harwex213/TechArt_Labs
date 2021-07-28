import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import profileSlice from "../slices/profileSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        profile: profileSlice,
    },
});
