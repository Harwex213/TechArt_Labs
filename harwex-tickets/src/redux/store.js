import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux/slices/userSlice";
import cinemasSlice from "../redux/slices/cinemasSlice";
import citiesSlice from "./slices/citiesSlice";
import moviesSlice from "./slices/moviesSclise";
import ticketsSlice from "./slices/ticketsSlice";

import authRequestsSlice from "./slices/requests/authRequestsSlice";
import cinemasRequestsSlice from "./slices/requests/cinemasRequestsSlice";
import citiesRequestsSlice from "./slices/requests/citiesRequestSlice";
import moviesRequestsSlice from "./slices/requests/moviesRequestSlice";

import { emptySplitApi } from "./split";

export const store = configureStore({
    reducer: {
        user: userSlice,
        cinemas: cinemasSlice,
        cities: citiesSlice,
        movies: moviesSlice,
        tickets: ticketsSlice,

        authRequests: authRequestsSlice,
        cinemasRequests: cinemasRequestsSlice,
        citiesRequests: citiesRequestsSlice,
        moviesRequests: moviesRequestsSlice,

        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emptySplitApi.middleware),
});
