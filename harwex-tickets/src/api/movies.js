import ApiEndPoint from "../config/constants/ApiEndPoint";

const getMovies = () => {
    return fetch(`${ApiEndPoint}/movies`);
};

export const moviesApi = {
    getMovies,
};
