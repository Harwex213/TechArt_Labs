import { emptySplitApi } from "../split";

const ticketsApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        orderTicket: builder.mutation({
            query: ({ sessionId, seatId, userId }) => ({
                url: "tickets",
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: { sessionId, seatId, userId },
            }),
            invalidatesTags: ["SessionFreeSeats"],
        }),
    }),
});

export const { use, useOrderTicketMutation } = ticketsApi;
