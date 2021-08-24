import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

import styles from "./styles";

const Movie = ({ style, photo, movie, onClick }) => {
    const handleClick = () => {
        onClick(movie.id);
    };

    return (
        <Card style={style} onClick={handleClick}>
            {photo}
            <h1 style={styles.name}>{movie.name}</h1>
            <h5 style={styles.city}>
                {movie.startDate.substring(0, 10)} - {movie.endDate.substring(0, 10)}
            </h5>
        </Card>
    );
};

Movie.propTypes = {
    style: PropTypes.object,
    photo: PropTypes.element,
    movie: PropTypes.object,
    onClick: PropTypes.func,
};

export default Movie;
