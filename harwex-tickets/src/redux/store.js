import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/slices/userSlice";
import cinemasSlice from "../redux/slices/cinemasSlice";
import citiesSlice from "./slices/citiesSlice";

import authRequestsSlice from "./slices/requests/authRequestsSlice";
import cinemasRequestsSlice from "./slices/requests/cinemasRequestsSlice";
import citiesRequestsSlice from "./slices/requests/citiesRequestSlice";
import moviesRequestsSlice from "./slices/requests/moviesRequestSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        cinemas: cinemasSlice,
        cities: citiesSlice,

        authRequests: authRequestsSlice,
        cinemasRequests: cinemasRequestsSlice,
        citiesRequests: citiesRequestsSlice,
        moviesRequests: moviesRequestsSlice,
    },
});
