import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/slices/userSlice";
import actionRequestsStatuses from "./slices/requests/authRequestsSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        actionRequestsStatuses: actionRequestsStatuses,
    },
});
