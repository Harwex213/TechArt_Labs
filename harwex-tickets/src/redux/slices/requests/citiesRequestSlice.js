import { createSlice } from "@reduxjs/toolkit";
import { RequestInitialState } from "../../../config/constants/Request";
import { fetchCities } from "../../actions/cities";

export const citiesRequestsSlice = createSlice({
    name: "citiesRequests",
    initialState: {
        fetchCities: RequestInitialState,
    },
    extraReducers: {
        [fetchCities.pending]: (state, _) => {
            state.fetchCities.status = "pending";
        },
        [fetchCities.rejected]: (state, action) => {
            state.fetchCities.status = "rejected";
            state.fetchCities.error = action.payload ?? action.error.message;
        },
        [fetchCities.fulfilled]: (state, _) => {
            state.fetchCities.status = "fulfilled";
        },
    },
});

export const selectFetchCitiesRequest = (state) => state.citiesRequests.fetchCities;

export default citiesRequestsSlice.reducer;
