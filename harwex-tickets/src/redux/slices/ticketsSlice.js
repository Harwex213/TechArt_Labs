import { createSlice } from "@reduxjs/toolkit";
import { orderTicket } from "../actions/tickets";

export const ticketsSlice = createSlice({
    name: "tickets",
    initialState: [],
    extraReducers: {
        [orderTicket.fulfilled]: (state, action) => {
            state.unshift(action.payload);
        },
    },
});

export const selectTickets = (state) => state.cities;

export default ticketsSlice.reducer;
