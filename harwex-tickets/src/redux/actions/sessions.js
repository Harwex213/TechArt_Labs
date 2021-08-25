import { createAsyncThunk } from "@reduxjs/toolkit";
import { validateResponse } from "../../utils/response";
import { sessionsApi } from "../../api/sessions";

export const fetchSessions = createAsyncThunk("fetchSessions", async ({ cinemaId, movieId }) => {
    const sessionsResponse = await sessionsApi.getSessions({ cinemaId, movieId });
    const sessions = await sessionsResponse.json();
    validateResponse(sessionsResponse, sessions);

    return sessions;
});

export const fetchSessionFreeSeats = createAsyncThunk("fetchSessions", async ({ sessionId }) => {
    const sessionFreeSeatsResponse = await sessionsApi.getSessionFreeSeats({ sessionId });
    const seats = await sessionFreeSeatsResponse.json();
    validateResponse(sessionFreeSeatsResponse, seats);

    return seats;
});
