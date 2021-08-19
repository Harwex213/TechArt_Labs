import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCinemas } from "../../redux/slices/cinemasSlice";

import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Button } from "antd";

import styles from "./styles";

const cinemaValidationSchema = Yup.object().shape({
    name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    cityName: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
});

const CinemaPage = () => {
    const { cinemaId } = useParams();
    const cinemas = useSelector(selectCinemas);
    const [cinema, setCinema] = useState(null);

    const handleSubmit = () => {};

    const handleDeleteButton = () => {};

    useEffect(() => {
        setCinema(cinemas.find((cinema) => cinema.id === Number(cinemaId)));
    }, [cinemaId, cinemas]);

    return (
        <div style={styles.layout}>
            <Formik
                initialValues={{
                    name: cinema.name,
                    cityName: cinema.cityName,
                }}
                validationSchema={cinemaValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Form.Item name="name">
                        <Input name="name" placeholder="Cinema name" />
                    </Form.Item>
                    <Form.Item name="cityName">
                        <Input name="cityName" placeholder="City name" />
                    </Form.Item>
                    <div style={{ display: "flex" }}>
                        <SubmitButton>Save</SubmitButton>
                        <Button style={styles.deleteButton} onClick={handleDeleteButton}>
                            Delete
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default CinemaPage;
