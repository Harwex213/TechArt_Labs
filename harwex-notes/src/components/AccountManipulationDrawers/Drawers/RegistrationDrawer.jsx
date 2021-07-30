import React from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

import { Form, Input, SubmitButton, DatePicker } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

import { registerUser } from "../../../redux/actions/reg";

const registrationValidationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    firstname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    lastname: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Should be an email").required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please, repeat your password"),
});

const RegistrationDrawer = (props) => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, formikBag) => {
        try {
            const regResult = await dispatch(
                registerUser({
                    id: Math.round(Date.now() + Math.random()),
                    username: values.username,
                    firstname: values.firstname,
                    lastname: values.lastname,
                    dateOfBirth: values.dateOfBirth,
                    email: values.email,
                    password: values.password,
                })
            );
            unwrapResult(regResult);
            props.onReg();
            formikBag.resetForm();
        } catch (e) {
            formikBag.setFieldError("username", "Registration: " + e.message);
        }
    };

    return (
        <>
            <h1>Registration</h1>
            <Formik
                initialValues={{
                    username: "",
                    firstname: "",
                    lastname: "",
                    dateOfBirth: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={registrationValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form
                    wrapperCol={{
                        xxl: { span: 8 },
                        xl: { span: 10 },
                        lg: { span: 14 },
                        sm: { span: 24 },
                    }}
                >
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
                        <DatePicker name="dateOfBirth" />
                    </Form.Item>
                    <Form.Item name="email">
                        <Input name="email" placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password name="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="confirmPassword">
                        <Input.Password name="confirmPassword" placeholder="Confirm Password" />
                    </Form.Item>

                    <SubmitButton>Register</SubmitButton>
                </Form>
            </Formik>
        </>
    );
};

RegistrationDrawer.propTypes = {
    onReg: PropTypes.func,
};

export default RegistrationDrawer;
