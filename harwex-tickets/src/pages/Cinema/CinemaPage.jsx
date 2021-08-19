import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { deleteCinema, updateCinema } from "../../redux/actions/cinemas";
import { selectCinemas } from "../../redux/slices/cinemasSlice";

import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Button, notification } from "antd";

import RoutePaths from "../../config/constants/RoutePaths";
import styles from "./styles";

const cinemaValidationSchema = Yup.object().shape({
    name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    cityName: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
});

const CinemaPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { cinemaId } = useParams();
    const cinemas = useSelector(selectCinemas);
    const [cinema, setCinema] = useState(null);

    const handleSubmit = async (values, formikBag) => {
        try {
            const result = await dispatch(
                updateCinema({
                    id: cinema.id,
                    name: values.name,
                    cityName: values.cityName,
                })
            );
            unwrapResult(result);
        } catch (e) {
            formikBag.setFieldError("name", e.message);
        }
    };

    const handleDeleteButton = async () => {
        try {
            const result = await dispatch(
                deleteCinema({
                    id: cinema.id,
                    name: cinema.name,
                    cityName: cinema.cityName,
                })
            );
            unwrapResult(result);
            history.push(RoutePaths.cinemas);
        } catch (e) {
            notification["error"]({
                message: "Something went wrong...",
                description: e.message,
            });
        }
    };

    useEffect(() => {
        setCinema(cinemas.find((cinema) => cinema.id === Number(cinemaId)));
    }, [cinemaId, cinemas]);

    return (
        <div style={styles.layout}>
            <h1 style={styles.name}>{cinema?.name}</h1>
            <h3 style={styles.cityName}>{cinema?.cityName}</h3>
            <Formik
                initialValues={{
                    name: "",
                    cityName: "",
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
