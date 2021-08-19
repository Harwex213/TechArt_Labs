import ApiEndPoint from "../config/constants/ApiEndPoint";

const getCinemas = () => {
    return fetch(`${ApiEndPoint}/cinemas`);
};

const getCinema = ({ id }) => {
    return fetch(`${ApiEndPoint}/cinemas/${id}`);
};

const createCinema = ({ name, cityId }) => {
    return fetch(`${ApiEndPoint}/cinemas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ name, cityId }),
    });
};

const updateCinema = ({ id, name, cityId }) => {
    return fetch(`${ApiEndPoint}/cinemas/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ id, name, cityId }),
    });
};

const deleteCinema = ({ id }) => {
    return fetch(`${ApiEndPoint}/cinemas/${id}`, {
        method: "DELETE",
    });
};

export const cinemasApi = {
    getCinemas,
    getCinema,
    createCinema,
    updateCinema,
    deleteCinema,
};
