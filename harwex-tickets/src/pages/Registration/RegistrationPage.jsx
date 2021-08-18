import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../redux/actions/auth";

import { Formik } from "formik";
import { Form, Input, SubmitButton, DatePicker } from "formik-antd";
import * as Yup from "yup";

import RoutePaths from "../../config/constants/RoutePaths";
import styles from "./styles";

const registrationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    firstname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    lastname: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    password: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please, repeat your password"),
});

const RegistrationPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, formikBag) => {
        try {
            const result = await dispatch(
                register({
                    username: values.username,
                    phoneNumber: values.phoneNumber,
                    password: values.password,
                    confirmPassword: values.confirmPassword,
                })
            );
            unwrapResult(result);
            formikBag.resetForm();
        } catch (e) {
            formikBag.setFieldError("username", e.message);
        }
    };

    return (
        <div style={styles.layout}>
            <Formik
                initialValues={{
                    username: "",
                    firstname: "",
                    lastname: "",
                    dateOfBirth: "",
                    phoneNumber: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={registrationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Form.Item name="username">
                        <Input name="username" placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="firstname">
                        <Input name="firstname" placeholder="Firstname" />
                    </Form.Item>
                    <Form.Item name="lastname">
                        <Input name="lastname" placeholder="Lastname" />
                    </Form.Item>
                    <Form.Item name="dateOfBirth">
                        <DatePicker name="dateOfBirth" placeholder="Birthdate" />
                    </Form.Item>
                    <Form.Item name="phoneNumber">
                        <Input name="phoneNumber" placeholder="Phone Number" />
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password name="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="confirmPassword">
                        <Input.Password name="confirmPassword" placeholder="Confirm Password" />
                    </Form.Item>

                    <SubmitButton>Register</SubmitButton>
                    <Link style={styles.loginLink} to={RoutePaths.auth}>
                        Login?
                    </Link>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationPage;
