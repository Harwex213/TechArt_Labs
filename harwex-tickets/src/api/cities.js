import ApiEndPoint from "../config/constants/ApiEndPoint";

const getCities = () => {
    return fetch(`${ApiEndPoint}/cities`);
};

export const citiesApi = {
    getCities,
};
