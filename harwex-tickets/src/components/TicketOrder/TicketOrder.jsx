import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMovies } from "../../redux/slices/moviesSclise";
import { selectCinemas } from "../../redux/slices/cinemasSlice";
import { selectFetchCinemasRequest } from "../../redux/slices/requests/cinemasRequestsSlice";
import { fetchCinemas } from "../../redux/actions/cinemas";

import { useFetchData } from "../../hooks/fetches";

import { Formik } from "formik";
import { Form, SubmitButton, Select } from "formik-antd";

import styles from "./styles";
import * as Yup from "yup";
import { Divider } from "antd";

const ticketOrderValidationSchema = Yup.object().shape({
    cinemaId: Yup.number().required("Required"),
});

const TicketOrder = () => {
    const { movieId } = useParams();

    const movies = useSelector(selectMovies);
    const cinemas = useFetchData(fetchCinemas, selectFetchCinemasRequest, selectCinemas);

    const [movie, setMovie] = useState(undefined);

    useEffect(() => {
        const movie = movies.find((movie) => movie.id === Number(movieId));
        setMovie(movie ?? undefined);
    }, [movieId, movies]);

    const handleOrder = (values) => {
        console.log(values);
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
                        initialValues={{
                            cinemaId: "",
                        }}
                        validationSchema={ticketOrderValidationSchema}
                        onSubmit={handleOrder}
                    >
                        <Form>
                            <Form.Item name="cinemaId">
                                <p>Choose Cinema</p>
                                <Select name="cinemaId" style={styles.cinemaSelect}>
                                    {cinemas.map((cinema) => (
                                        <Select.Option key={cinema?.id} value={cinema?.id}>
                                            {cinema?.name} , {cinema?.cityName}
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
