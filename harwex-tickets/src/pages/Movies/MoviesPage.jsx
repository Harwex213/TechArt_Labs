import React from "react";
import { useFetchData } from "../../hooks/fetches";
import { fetchMovies } from "../../redux/actions/movies";
import { fetchCities } from "../../redux/actions/cities";
import { selectFetchMoviesRequest } from "../../redux/slices/requests/moviesRequestSlice";
import { selectFetchCitiesRequest } from "../../redux/slices/requests/citiesRequestSlice";
import { selectMovies } from "../../redux/slices/moviesSclise";
import { selectCities } from "../../redux/slices/citiesSlice";

import { Empty, List, Select } from "antd";

import Movie from "../../components/Movie/Movie";

import styles from "./styles";

const MoviesPage = () => {
    const movies = useFetchData(fetchCities, selectFetchMoviesRequest, selectMovies);
    const cities = useFetchData(fetchMovies, selectFetchCitiesRequest, selectCities);

    const handleCitySelect = () => {};

    const handleMovieClick = () => {};

    return (
        <>
            <div style={styles.citySelectWrapper}>
                <h1 style={styles.citySelectPrefix}>Select your city: </h1>
                <Select style={styles.citySelect} onSelect={handleCitySelect}>
                    {cities.map((city) => (
                        <Select.Option key={city?.id} value={city?.name}>
                            {city?.name}
                        </Select.Option>
                    ))}
                </Select>
            </div>
            <List
                grid={{ gutter: 20, column: 3 }}
                itemLayout="vertical"
                dataSource={movies}
                split={false}
                renderItem={(item) => (
                    <List.Item>
                        <Movie
                            style={styles.movieCard}
                            photo={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                            movie={item}
                            onClick={handleMovieClick}
                        />
                    </List.Item>
                )}
            />
        </>
    );
};

export default MoviesPage;
