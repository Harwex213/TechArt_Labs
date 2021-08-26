import ApiEndPoint from "../config/constants/ApiEndPoint";
import { getAccessToken } from "../utils/tokens";

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
            Authorization: getAccessToken(),
        },
        body: JSON.stringify({ name, cityId }),
    });
};

const createHall = ({ cinemaId, rowsAmount, colsAmount }) => {
    return fetch(`${ApiEndPoint}/cinemas/halls`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: getAccessToken(),
        },
        body: JSON.stringify({ cinemaId, rowsAmount, colsAmount }),
    });
};

const updateCinema = ({ id, name, cityId }) => {
    return fetch(`${ApiEndPoint}/cinemas/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: getAccessToken(),
        },
        body: JSON.stringify({ id, name, cityId }),
    });
};

const updateHall = ({ id, rowsAmount, colsAmount }) => {
    return fetch(`${ApiEndPoint}/cinemas/halls/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: getAccessToken(),
        },
        body: JSON.stringify({ id, rowsAmount, colsAmount }),
    });
};

const deleteCinema = ({ id }) => {
    return fetch(`${ApiEndPoint}/cinemas/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: getAccessToken(),
        },
    });
};

const deleteHall = ({ id }) => {
    return fetch(`${ApiEndPoint}/cinemas/halls/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: getAccessToken(),
        },
    });
};

export const cinemasApi = {
    getCinemas,
    getCinema,
    createCinema,
    updateCinema,
    deleteCinema,
    createHall,
    updateHall,
    deleteHall,
};
