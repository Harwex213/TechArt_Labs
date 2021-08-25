import ApiEndPoint from "../config/constants/ApiEndPoint";

const getSessions = ({ cinemaId, movieId }) => {
    const url = new URL(`${ApiEndPoint}/sessions`);
    const params = { cinemaId, movieId };
    url.search = new URLSearchParams(params).toString();
    console.log(url.toString());
    return fetch(url.toString());
};

export const sessionsApi = {
    getSessions,
};
