import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/slices/userSlice";
import authRequestsSlice from "./slices/requests/authRequestsSlice";
import cinemasRequestsSlice from "./slices/requests/cinemasRequestsSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        authRequests: authRequestsSlice,
        cinemasRequests: cinemasRequestsSlice,
    },
});
