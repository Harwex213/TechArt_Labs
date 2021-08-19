import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/slices/userSlice";
import cinemasSlice from "../redux/slices/cinemasSlice";
import authRequestsSlice from "./slices/requests/authRequestsSlice";
import cinemasRequestsSlice from "./slices/requests/cinemasRequestsSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        cinemas: cinemasSlice,
        authRequests: authRequestsSlice,
        cinemasRequests: cinemasRequestsSlice,
    },
});
