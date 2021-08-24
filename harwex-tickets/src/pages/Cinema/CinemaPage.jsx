import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { deleteCinema, updateCinema } from "../../redux/actions/cinemas";
import { selectCinemas } from "../../redux/slices/cinemasSlice";
import { selectCities } from "../../redux/slices/citiesSlice";

import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, SubmitButton, Select } from "formik-antd";
import { Button, Divider, notification } from "antd";

import HallsList from "../../components/HallsList/HallsList";

import RoutePaths from "../../config/constants/RoutePaths";
import styles from "./styles";

const cinemaValidationSchema = Yup.object().shape({
    name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    cityName: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
});

const CinemaPage = () => {
    const history = useHistory();
    const { cinemaId } = useParams();

    const dispatch = useDispatch();
    const cinemas = useSelector(selectCinemas);
    const cities = useSelector(selectCities);

    const [cinema, setCinema] = useState(undefined);
    const [halls, setHalls] = useState(undefined);

    useEffect(() => {
        const cinema = cinemas.find((cinema) => cinema.id === Number(cinemaId));
        setCinema(cinema ?? undefined);
        setHalls(cinema ? cinema.halls : undefined);
    }, [cinemaId, cinemas]);

    const handleUpdate = async (values, formikBag) => {
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

    const handleDelete = async () => {
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

    return (
        <div style={styles.layout}>
            <h1 style={styles.title}>{cinema?.name}</h1>
            <h3 style={styles.subTitle}>{cinema?.cityName}</h3>
            <Formik
                initialValues={{
                    name: "",
                    cityName: "",
                }}
                validationSchema={cinemaValidationSchema}
                onSubmit={handleUpdate}
            >
                <Form autoComplete="off">
                    <Form.Item name="name">
                        <Input name="name" placeholder="Cinema name" />
                    </Form.Item>
                    <Form.Item name="cityName">
                        <Select
                            name="cityName"
                            showSearch
                            placeholder="Select a city"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {cities.map((city) => (
                                <Select.Option key={city?.id} value={city?.name}>
                                    {city?.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <div style={styles.wrapper}>
                        <SubmitButton type="default">Save</SubmitButton>
                        <Button style={styles.deleteButton} onClick={handleDelete}>
                            Delete
                        </Button>
                    </div>
                </Form>
            </Formik>

            <Divider />
            <h1 style={styles.title}>Halls: {halls?.length}</h1>
            <HallsList halls={halls} cinemaId={cinema?.id} />
        </div>
    );
};

export default CinemaPage;
