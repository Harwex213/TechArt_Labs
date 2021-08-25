import { createAsyncThunk } from "@reduxjs/toolkit";
import { validateResponse } from "../../utils/response";
import { ticketApi } from "../../api/tickets";

export const orderTicket = createAsyncThunk("orderTicket", async ({ sessionId, seatId, userId }) => {
    const orderResponse = await ticketApi.createTicket({ sessionId, seatId, userId });
    const order = await orderResponse.json();
    validateResponse(orderResponse, order);

    return {
        id: order.id,
        sessionId,
        seatId,
        userId,
    };
});
