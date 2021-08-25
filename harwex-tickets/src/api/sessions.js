import ApiEndPoint from "../config/constants/ApiEndPoint";

const getSessions = ({ cinemaId, movieId }) => {
    const url = new URL(`${ApiEndPoint}/sessions`);
    const params = { cinemaId, movieId };
    url.search = new URLSearchParams(params).toString();
    return fetch(url.toString());
};

const getSessionFreeSeats = ({ sessionId }) => {
    return fetch(`${ApiEndPoint}/sessions/${sessionId}/seats`);
};

export const sessionsApi = {
    getSessions,
    getSessionFreeSeats,
};
