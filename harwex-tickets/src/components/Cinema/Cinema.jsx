import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

import styles from "./styles";

const Cinema = ({ style, photo, cinema, onClick }) => {
    const handleClick = () => {
        onClick(cinema.id);
    };

    return (
        <Card style={style} onClick={handleClick}>
            {photo}
            <h1 style={styles.name}>{cinema.name}</h1>
            <h5 style={styles.city}>{cinema.cityName}</h5>
        </Card>
    );
};

Cinema.propTypes = {
    style: PropTypes.object,
    photo: PropTypes.element,
    cinema: PropTypes.object,
    onClick: PropTypes.func,
};

export default Cinema;
