import { createSlice } from "@reduxjs/toolkit";
import { createCinema, deleteCinema, fetchCinemas, updateCinema } from "../actions/cinemas";

export const cinemasSlice = createSlice({
    name: "cinemas",
    initialState: [],
    extraReducers: {
        [fetchCinemas.fulfilled]: (state, action) => (state = action.payload),
        [createCinema.fulfilled]: (state, action) => {
            state.unshift(action.payload);
        },
        [updateCinema.fulfilled]: (state, action) => {
            const index = state.indexOf(action.payload);
            if (index > -1) {
                state[index] = action.payload;
            }
        },
        [deleteCinema.fulfilled]: (state, action) => {
            const index = state.indexOf(action.payload);
            if (index > -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const selectCinemas = (state) => state.cinemas;

export default cinemasSlice.reducer;
