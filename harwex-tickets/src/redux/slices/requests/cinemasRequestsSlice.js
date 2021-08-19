import { createSlice } from "@reduxjs/toolkit";
import { createCinema, deleteCinema, fetchCinemas, updateCinema } from "../../actions/cinemas";
import { RequestInitialState } from "../../../config/constants/Request";

export const cinemasRequestsSlice = createSlice({
    name: "cinemasRequests",
    initialState: {
        fetchCinemas: RequestInitialState,
        createCinema: RequestInitialState,
        updateCinema: RequestInitialState,
        deleteCinema: RequestInitialState,
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

        [createCinema.pending]: (state, _) => {
            state.createCinema.status = "pending";
        },
        [createCinema.rejected]: (state, action) => {
            state.createCinema.status = "rejected";
            state.createCinema.error = action.payload ?? action.error.message;
        },
        [createCinema.fulfilled]: (state, _) => {
            state.createCinema.status = "fulfilled";
        },

        [updateCinema.pending]: (state, _) => {
            state.updateCinema.status = "pending";
        },
        [updateCinema.rejected]: (state, action) => {
            state.updateCinema.status = "rejected";
            state.updateCinema.error = action.payload ?? action.error.message;
        },
        [updateCinema.fulfilled]: (state, _) => {
            state.updateCinema.status = "fulfilled";
        },

        [deleteCinema.pending]: (state, _) => {
            state.deleteCinema.status = "pending";
        },
        [deleteCinema.rejected]: (state, action) => {
            state.deleteCinema.status = "rejected";
            state.deleteCinema.error = action.payload ?? action.error.message;
        },
        [deleteCinema.fulfilled]: (state, _) => {
            state.deleteCinema.status = "fulfilled";
        },
    },
});

export const selectFetchCinemasRequest = (state) => state.cinemasRequests.fetchCinemas;

export default cinemasRequestsSlice.reducer;
