import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/slices/userSlice";
import authRequestsSlice from "./slices/requests/authRequestsSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        authRequests: authRequestsSlice,
    },
});
