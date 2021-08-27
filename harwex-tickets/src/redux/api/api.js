import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const harwexTicketsApi = createApi({
    reducerPath: "harwexTickets",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:5001/api",
    }),
    tagTypes: ["Sessions"],
    endpoints: (builder) => ({
        getSessions: builder.query({
            query: ({ cinemaId, movieId }) => {
                const url = new URL("sessions");
                url.search = new URLSearchParams({ cinemaId, movieId }).toString();
                return url.toString();
            },
            providesTags: (_) => ["Sessions"],
        }),
        getSessionFreeSeats: builder.query({
            query: (sessionId) => `sessions/${sessionId}/seats`,
        }),
    }),
});

export const { useGetLectureResourcesQuery, useGetLectureRankingByDepartmentIdQuery } = harwexTicketsApi;
