import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../actions/movies";

export const movieSlice = createSlice({
    name: "movies",
    initialState: [],
    extraReducers: {
        [fetchMovies.fulfilled]: (state, action) => (state = action.payload),
    },
});

export const selectMovies = (state) => state.movies;

export default movieSlice.reducer;
