import { createSlice } from "@reduxjs/toolkit";
import { fetchCinemas } from "../../actions/cinemas";
import { RequestInitialState } from "../../../config/constants/Request";

export const cinemasRequestsSlice = createSlice({
    name: "cinemasRequests",
    initialState: {
        fetchCinemas: RequestInitialState,
    },
    extraReducers: {
        [fetchCinemas.pending]: (state, _) => {
            state.fetchCinemas.status = "pending";
        },
        [fetchCinemas.rejected]: (state, action) => {
            state.fetchCinemas.status = "rejected";
            state.fetchCinemas.error = action.payload ?? action.error.message;
        },
        [fetchCinemas.fulfilled]: (state, _) => {
            state.fetchCinemas.status = "fulfilled";
        },
    },
});

export const selectFetchCinemasRequest = (state) => state.cinemasRequests.fetchCinemas;

export default cinemasRequestsSlice.reducer;
