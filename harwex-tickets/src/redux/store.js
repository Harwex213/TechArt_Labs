import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/slices/userSlice";
import requestsSlice from "../redux/slices/requestsSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        requests: requestsSlice,
    },
});
