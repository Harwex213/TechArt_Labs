import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/userSlice";
import profileSlice from "../redux/profileSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        profile: profileSlice,
    },
});
