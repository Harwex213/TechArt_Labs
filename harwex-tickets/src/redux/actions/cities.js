import { createAsyncThunk } from "@reduxjs/toolkit";
import { validateResponse } from "../../utils/response";
import { citiesApi } from "../../api/cities";

export const fetchCities = createAsyncThunk("fetchCities", async () => {
    const citiesResponse = await citiesApi.getCities();
    const cities = await citiesResponse.json();
    validateResponse(citiesResponse, cities);

    return cities;
});
