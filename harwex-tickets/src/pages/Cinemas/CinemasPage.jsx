import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCinemas } from "../../redux/actions/cinemas";
import { selectFetchCinemasRequest } from "../../redux/slices/requests/cinemasRequestsSlice";
import { selectCinemas } from "../../redux/slices/cinemasSlice";

import { Empty, Row, Col, notification } from "antd";

import CinemaPage from "../Cinema/CinemaPage";

import Cinema from "../../components/Cinema/Cinema";
import CinemaAdd from "../../components/CinemaAdd/CinemaAdd";

import styles from "./styles";

const CinemasPage = () => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
    const dispatch = useDispatch();
    const { status, error } = useSelector(selectFetchCinemasRequest);
    const cinemas = useSelector(selectCinemas);

    const handleCinemaClick = (id) => {
        history.push(`${url}/${id}`);
    };

    useEffect(() => {
        const action = async () => {
            await dispatch(fetchCinemas());
        };
        if (status === "idle") {
            action();
        }
        if (status === "rejected") {
            notification["error"]({
                message: "Something went wrong...",
                description: error,
            });
        }
    }, [dispatch, error, status]);

    return (
        <Switch>
            <Route exact path={path}>
                <div style={styles.addCinemaIconWrapper}>
                    <CinemaAdd style={styles.addCinemaIcon} />
                </div>
                <Row gutter={[16, 24]}>
                    {cinemas.map((item) => (
                        <Col key={item.id} span={8}>
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
                <CinemaPage />
            </Route>
        </Switch>
    );
};

export default CinemasPage;
