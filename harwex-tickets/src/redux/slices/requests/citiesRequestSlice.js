import { createSlice } from "@reduxjs/toolkit";
import { RequestInitialState } from "../../../config/constants/Request";
import { fetchCities } from "../../actions/cities";

export const citiesRequestsSlice = createSlice({
    name: "citiesRequests",
    initialState: {
        fetchCinemas: RequestInitialState,
    },
    extraReducers: {
        [fetchCities.pending]: (state, _) => {
            state.fetchCinemas.status = "pending";
        },
        [fetchCities.rejected]: (state, action) => {
            state.fetchCinemas.status = "rejected";
            state.fetchCinemas.error = action.payload ?? action.error.message;
        },
        [fetchCities.fulfilled]: (state, _) => {
            state.fetchCinemas.status = "fulfilled";
        },
    },
});

export const selectFetchCitiesRequest = (state) => state.citiesRequests.fetchCinemas;

export default citiesRequestsSlice.reducer;
