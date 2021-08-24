import { createSlice } from "@reduxjs/toolkit";
import { RequestInitialState } from "../../../config/constants/Request";
import { fetchMovies } from "../../actions/movies";

export const moviesRequestsSlice = createSlice({
    name: "moviesRequests",
    initialState: {
        fetchMovies: RequestInitialState,
    },
    extraReducers: {
        [fetchMovies.pending]: (state, _) => {
            state.fetchMovies.status = "pending";
        },
        [fetchMovies.rejected]: (state, action) => {
            state.fetchMovies.status = "rejected";
            state.fetchMovies.error = action.payload ?? action.error.message;
        },
        [fetchMovies.fulfilled]: (state, _) => {
            state.fetchMovies.status = "fulfilled";
        },
    },
});

export const selectFetchMoviesRequest = (state) => state.moviesRequests.fetchMovies;

export default moviesRequestsSlice.reducer;
