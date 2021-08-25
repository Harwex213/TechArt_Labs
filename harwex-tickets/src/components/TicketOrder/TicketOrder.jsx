import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { selectMovies } from "../../redux/slices/moviesSclise";
import { selectCinemas } from "../../redux/slices/cinemasSlice";
import { selectUser } from "../../redux/slices/userSlice";
import { selectFetchCinemasRequest } from "../../redux/slices/requests/cinemasRequestsSlice";
import { fetchCinemas } from "../../redux/actions/cinemas";
import { fetchSessionFreeSeats, fetchSessions } from "../../redux/actions/sessions";
import { orderTicket } from "../../redux/actions/tickets";

import { useFetchData } from "../../hooks/fetches";

import { Divider, notification } from "antd";
import { Formik } from "formik";
import { Form, SubmitButton, Select } from "formik-antd";
import * as Yup from "yup";

import styles from "./styles";

const ticketOrderValidationSchema = Yup.object().shape({
    cinemaId: Yup.number().required("Required"),
    sessionId: Yup.number().required("Required"),
    seatId: Yup.number().required("Required"),
});

const TicketOrder = () => {
    let hallId = 1;
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const formRef = useRef();

    const user = useSelector(selectUser);
    const movies = useSelector(selectMovies);
    const cinemas = useFetchData(fetchCinemas, selectFetchCinemasRequest, selectCinemas);
    const [sessions, setSessions] = useState(undefined);
    const [freeSeats, setFreeSeats] = useState(undefined);

    const [movie, setMovie] = useState(undefined);

    useEffect(() => {
        const movie = movies.find((movie) => movie.id === Number(movieId));
        setMovie(movie ?? undefined);
    }, [movieId, movies]);

    const handleOrder = async (values, formikBag) => {
        try {
            const result = await dispatch(
                orderTicket({
                    sessionId: values.sessionId,
                    seatId: values.seatId,
                    userId: user.id,
                })
            );
            unwrapResult(result);

            notification["success"]({
                message: "Ticket has been successfully ordered",
            });
            formikBag.resetForm();
            setSessions(undefined);
            setFreeSeats(undefined);
        } catch (e) {
            console.log(e);
            notification["error"]({
                message: "Failed to order ticket",
                description: e.message,
            });
        }
    };

    const handleCinemaSelect = async (cinemaId) => {
        try {
            const result = await dispatch(fetchSessions({ cinemaId, movieId }));
            unwrapResult(result);
            setSessions(result.payload);
            formRef.current.setFieldValue("sessionId", "");
        } catch (e) {
            notification["error"]({
                message: "Failed to fetch sessions of such cinema and movie",
                description: e.message,
            });
        }
    };

    const handleSessionSelect = async (sessionId) => {
        await fetchFreeSeats(sessionId);
    };

    const fetchFreeSeats = async (sessionId) => {
        try {
            const result = await dispatch(fetchSessionFreeSeats({ sessionId }));
            unwrapResult(result);
            setFreeSeats(result.payload);
            formRef.current.setFieldValue("seatId", "");
        } catch (e) {
            notification["error"]({
                message: "Failed to fetch free seats of session",
                description: e.message,
            });
        }
    };

    const movieInfo = (
        <div style={styles.movieInfoWrapper}>
            <h2>{movie?.name}</h2>
            <p>{"Duration: " + movie?.duration.substring(0, 5)}</p>
            <p>{"Genre: " + movie?.genre}</p>
            <p>
                {movie?.startDate.substring(0, 10)} — {movie?.endDate.substring(0, 10)}
            </p>
        </div>
    );

    return (
        <>
            {movie ? (
                <>
                    {movieInfo}

                    <Divider />
                    <h2>Ticket ordering</h2>
                    <Formik
                        innerRef={formRef}
                        initialValues={{
                            cinemaId: "",
                            sessionId: "",
                            seatId: "",
                        }}
                        validationSchema={ticketOrderValidationSchema}
                        onSubmit={handleOrder}
                    >
                        <Form>
                            <Form.Item name="cinemaId">
                                <p>Choose Cinema</p>
                                <Select name="cinemaId" style={styles.select} onSelect={handleCinemaSelect}>
                                    {cinemas.map((cinema) => (
                                        <Select.Option key={cinema?.id} value={cinema?.id}>
                                            {cinema?.name} , {cinema?.cityName}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item name="sessionId">
                                <p>Choose Session</p>
                                <Select name="sessionId" style={styles.select} onSelect={handleSessionSelect}>
                                    {sessions?.map((session) => (
                                        <Select.Option key={session?.id} value={session?.id}>
                                            {session?.time.replace("T", " ")}, hall {hallId++}, price{" "}
                                            {session?.price} BYN
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item name="seatId">
                                <p>Choose Seat</p>
                                <Select name="seatId" style={styles.select}>
                                    {freeSeats?.map((seat) => (
                                        <Select.Option key={seat?.id} value={seat?.id}>
                                            Row: {seat?.row}, Position: {seat?.position}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <SubmitButton>Order</SubmitButton>
                        </Form>
                    </Formik>
                </>
            ) : (
                "hello"
            )}
        </>
    );
};

export default TicketOrder;
