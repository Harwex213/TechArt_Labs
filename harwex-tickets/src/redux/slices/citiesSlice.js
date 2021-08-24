import { createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "../actions/cities";

export const citiesSlice = createSlice({
    name: "cities",
    initialState: [],
    extraReducers: {
        [fetchCities.fulfilled]: (state, action) => (state = action.payload),
    },
});

export const selectCities = (state) => state.cities;

export default citiesSlice.reducer;
