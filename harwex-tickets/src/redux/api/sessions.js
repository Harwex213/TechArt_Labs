import { emptySplitApi } from "../split";

const sessionsApi = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        getSessions: builder.query({
            query: ({ cinemaId, movieId }) =>
                `sessions?${new URLSearchParams({ cinemaId, movieId }).toString()}`,
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: "Sessions", id })), "Sessions"] : ["Sessions"],
        }),
        getSessionFreeSeats: builder.query({
            query: (sessionId) => `sessions/${sessionId}/seats`,
            providesTags: (result) =>
                result
                    ? [...result.map(({ id }) => ({ type: "SessionFreeSeats", id })), "SessionFreeSeats"]
                    : ["SessionFreeSeats"],
        }),
    }),
});

export const { useLazyGetSessionsQuery, useLazyGetSessionFreeSeatsQuery } = sessionsApi;
