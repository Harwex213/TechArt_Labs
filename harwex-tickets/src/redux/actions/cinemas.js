import { createAsyncThunk } from "@reduxjs/toolkit";
import { cinemasApi } from "../../api/cinemas";
import { validateResponse } from "../../utils/response";
import { citiesApi } from "../../api/cities";

export const fetchCinemas = createAsyncThunk("fetchCinemas", async () => {
    const cinemasResponse = await cinemasApi.getCinemas();
    const cinemas = await cinemasResponse.json();
    validateResponse(cinemasResponse, cinemas);

    const citiesResponse = await citiesApi.getCities();
    const cities = await citiesResponse.json();
    validateResponse(citiesResponse, cities);

    return cinemas.map((cinema) => {
        const city = cities.find((city) => city.id === cinema.cityId);
        return {
            id: cinema.id,
            name: cinema.name,
            cityName: city.name,
            halls: cinema.halls,
        };
    });
});

export const createCinema = createAsyncThunk("createCinema", async ({ name, cityName }) => {
    const cityResponse = await citiesApi.getCitiesByName({ cityName });
    const city = await cityResponse.json();
    validateResponse(cityResponse, city);

    if (city.length === 0) {
        throw new Error("Cities with such name doesn't exists");
    }

    const createCinemaResponse = await cinemasApi.createCinema({ name, cityId: city[0].id });
    const cinema = await createCinemaResponse.json();
    validateResponse(createCinemaResponse, cinema);

    return {
        id: cinema.id,
        name,
        cityName,
        halls: [],
    };
});

export const updateCinema = createAsyncThunk("updateCinema", async ({ id, name, cityName }) => {
    const cityResponse = await citiesApi.getCitiesByName({ cityName });
    const city = await cityResponse.json();
    validateResponse(cityResponse, city);

    if (city.length === 0) {
        throw new Error("Cities with such name doesn't exists");
    }

    const updateCinemaResponse = await cinemasApi.updateCinema({ id, name, cityId: city[0].id });
    const error = await updateCinemaResponse.json();
    validateResponse(updateCinemaResponse, error);

    return {
        id,
        name,
        cityName,
    };
});

export const deleteCinema = createAsyncThunk("deleteCinema", async ({ id, name, cityName }) => {
    const deleteCinemaResponse = await cinemasApi.deleteCinema({ id });
    const error = await deleteCinemaResponse.json();
    validateResponse(deleteCinemaResponse, error);

    return {
        id,
    };
});

export const createHall = createAsyncThunk("createHall", async ({ cinemaId, rowsAmount, colsAmount }) => {
    const createHallResponse = await cinemasApi.createHall({ cinemaId, rowsAmount, colsAmount });
    const hall = await createHallResponse.json();
    validateResponse(createHallResponse, hall);

    return {
        id: hall.id,
        cinemaId,
        rowsAmount,
        colsAmount,
    };
});

export const updateHall = createAsyncThunk("updateHall", async ({ id, cinemaId, rowsAmount, colsAmount }) => {
    const updateHallResponse = await cinemasApi.updateHall({ id, rowsAmount, colsAmount });
    const hall = await updateHallResponse.json();
    validateResponse(updateHallResponse, hall);

    return { id, cinemaId, rowsAmount, colsAmount };
});

export const deleteHall = createAsyncThunk("deleteHall", async ({ id, cinemaId }) => {
    const deleteHallResponse = await cinemasApi.deleteHall({ id });
    const hall = await deleteHallResponse.json();
    validateResponse(deleteHallResponse, hall);

    return { id, cinemaId };
});
