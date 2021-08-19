import ApiEndPoint from "../config/constants/ApiEndPoint";

const getCities = () => {
    return fetch(`${ApiEndPoint}/cities`);
};

const getCitiesByName = ({ cityName }) => {
    return fetch(`${ApiEndPoint}/cities?cityName=${cityName}`);
};

export const citiesApi = {
    getCities,
    getCitiesByName,
};
