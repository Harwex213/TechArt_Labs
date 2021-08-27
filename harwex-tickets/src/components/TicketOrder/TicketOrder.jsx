import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovies } from "../../redux/slices/moviesSclise";
import { selectCinemas } from "../../redux/slices/cinemasSlice";
import { selectUser } from "../../redux/slices/userSlice";
import { selectFetchCinemasRequest } from "../../redux/slices/requests/cinemasRequestsSlice";
import { fetchCinemas } from "../../redux/actions/cinemas";

import { useLazyGetSessionFreeSeatsQuery, useLazyGetSessionsQuery } from "../../redux/api/sessions";
import { useOrderTicketMutation } from "../../redux/api/tickets";

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
    const formRef = useRef();

    const [getSessions, { data: sessions }] = useLazyGetSessionsQuery();
    const [getFreeSeats, getFreeSeatsResult] = useLazyGetSessionFreeSeatsQuery();
    const [orderTicket] = useOrderTicketMutation();

    const user = useSelector(selectUser);
    const movies = useSelector(selectMovies);
    const cinemas = useFetchData(fetchCinemas, selectFetchCinemasRequest, selectCinemas);

    const [movie, setMovie] = useState(undefined);

    useEffect(() => {
        const movie = movies.find((movie) => movie.id === Number(movieId));
        setMovie(movie ?? undefined);
    }, [movieId, movies]);

    const handleOrder = async (values, formikBag) => {
        orderTicket({ sessionId: values.sessionId, seatId: values.seatId, userId: user.id })
            .unwrap()
            .then(() => {
                notification["success"]({
                    message: "Ticket has been successfully ordered",
                });
                formikBag.resetForm();
            })
            .catch((error) => {
                console.log(error);
                notification["error"]({
                    message: "Failed to order ticket",
                    description: error.message,
                });
            });
    };

    const handleCinemaSelect = (cinemaId) => {
        getSessions({ cinemaId, movieId });
    };

    const handleSessionSelect = (sessionId) => {
        getFreeSeats(sessionId);
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
                                    {getFreeSeatsResult.data?.map((seat) => (
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
