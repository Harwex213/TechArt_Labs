import { createAsyncThunk } from "@reduxjs/toolkit";
import { validateResponse } from "../../utils/response";
import { moviesApi } from "../../api/movies";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
    const moviesResponse = await moviesApi.getMovies();
    const movies = await moviesResponse.json();
    validateResponse(moviesResponse, movies);

    return movies;
});
