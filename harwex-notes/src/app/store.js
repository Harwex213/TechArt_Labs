import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import userActionsSlice from "../slices/userActionsSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        currentUserAction: userActionsSlice,
    },
});
