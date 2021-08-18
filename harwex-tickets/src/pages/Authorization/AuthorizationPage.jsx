import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "../../redux/actions/auth";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import * as Yup from "yup";

import RoutePaths from "../../config/constants/RoutePaths";
import styles from "./styles";

const authValidationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
});

const AuthorizationPage = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, formikBag) => {
        try {
            const result = await dispatch(login(values));
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
                    password: "",
                }}
                validationSchema={authValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Form.Item name="username">
                        <Input
                            name="username"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password
                            name="password"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <SubmitButton>Log in</SubmitButton>
                    <Link style={styles.registrationLink} to={RoutePaths.reg}>
                        Registration?
                    </Link>
                </Form>
            </Formik>
        </div>
    );
};

export default AuthorizationPage;
