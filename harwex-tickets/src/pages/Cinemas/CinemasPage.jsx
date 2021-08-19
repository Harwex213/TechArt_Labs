import React from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";

import { Empty, Row, Col } from "antd";

import Cinema from "../../components/Cinema/Cinema";

import styles from "./styles";
import CinemaAdd from "../../components/CinemaAdd/CinemaAdd";

const data = [
    {
        id: 0,
        name: "Победа",
        cityName: "Минск",
    },
    {
        id: 1,
        name: "Спартак",
        cityName: "Витебск",
    },
];

const CinemasPage = () => {
    const { path, url } = useRouteMatch();
    const history = useHistory();

    const handleCinemaClick = (id) => {
        history.push(`${url}/${id}`);
    };

    return (
        <Switch>
            <Route exact path={path}>
                <Row gutter={[16, 24]}>
                    <Col key={-1} span={4} style={styles.addCinemaIconWrapper}>
                        <CinemaAdd style={styles.addCinemaIcon} />
                    </Col>
                    {data.map((item) => (
                        <Col key={item.id} span={4}>
                            <Cinema
                                style={styles.cinemaCard}
                                photo={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                                cinema={item}
                                onClick={handleCinemaClick}
                            />
                        </Col>
                    ))}
                </Row>
            </Route>
            <Route path={`${path}/:cinemaId`}>
                <h1>Hello....</h1>
            </Route>
        </Switch>
    );
};

export default CinemasPage;
