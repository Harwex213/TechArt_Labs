import { createSlice } from "@reduxjs/toolkit";
import {
    createCinema,
    createHall,
    deleteCinema,
    deleteHall,
    fetchCinemas,
    updateCinema,
    updateHall,
} from "../actions/cinemas";

const updateCinemaInfo = (state, action, index) => {
    state[index].id = action.payload.id;
    state[index].name = action.payload.name;
    state[index].cityName = action.payload.cityName;
};

export const cinemasSlice = createSlice({
    name: "cinemas",
    initialState: [],
    extraReducers: {
        [fetchCinemas.fulfilled]: (state, action) => (state = action.payload.reverse()),
        [createCinema.fulfilled]: (state, action) => {
            state.unshift(action.payload);
        },
        [updateCinema.fulfilled]: (state, action) => {
            const index = state.findIndex((cinema) => (cinema.id = action.payload.id));
            if (index > -1) {
                updateCinemaInfo(state, action, index);
            }
        },
        [deleteCinema.fulfilled]: (state, action) => {
            const index = state.findIndex((cinema) => (cinema.id = action.payload.id));
            if (index > -1) {
                state.splice(index, 1);
            }
        },

        [createHall.fulfilled]: (state, action) => {
            const cinema = state.find((cinema) => cinema.id === action.payload.cinemaId);
            cinema.halls.push(action.payload);
        },
        [updateHall.fulfilled]: (state, action) => {
            const cinema = state.find((cinema) => cinema.id === action.payload.cinemaId);
            const index = cinema.halls.findIndex((hall) => (hall.id = action.payload.id));
            if (index > -1) {
                cinema.halls[index] = action.payload;
            }
        },
        [deleteHall.fulfilled]: (state, action) => {
            const cinema = state.find((cinema) => cinema.id === action.payload.cinemaId);
            const index = cinema.halls.findIndex((hall) => (hall.id = action.payload.id));
            if (index > -1) {
                cinema.halls.splice(index, 1);
            }
        },
    },
});

export const selectCinemas = (state) => state.cinemas;

export default cinemasSlice.reducer;
