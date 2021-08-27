import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "../utils/tokens";

export const emptySplitApi = createApi({
    reducerPath: "splitApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:5001/api",
        prepareHeaders: (headers) => {
            const token = getAccessToken();
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        },
    }),
    tagTypes: ["Sessions", "SessionFreeSeats"],
    endpoints: () => ({}),
});
