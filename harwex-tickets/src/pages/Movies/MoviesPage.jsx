import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFetchMoviesRequest } from "../../redux/slices/requests/moviesRequestSlice";
import { fetchMovies } from "../../redux/actions/movies";

import { Empty, List, notification } from "antd";

import Movie from "../../components/Movie/Movie";

import styles from "./styles";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const moviesRequest = useSelector(selectFetchMoviesRequest);

    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        const action = async () => {
            const result = await dispatch(fetchMovies());
            setMovies(result.payload ?? undefined);
        };
        if (moviesRequest.status === "idle") {
            action();
        }
        if (moviesRequest.status === "rejected") {
            notification["error"]({
                message: "Something went wrong...",
                description: moviesRequest.error,
            });
        }
    }, [dispatch, moviesRequest]);

    const handleMovieClick = () => {};

    return (
        <>
            <List
                grid={{ gutter: 20, column: 4 }}
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
