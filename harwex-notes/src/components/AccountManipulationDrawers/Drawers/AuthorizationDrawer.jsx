import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { logIn } from "../../../slices/userSlice";

const AuthorizationDrawer = (props) => {
    const dispatch = useDispatch();

    const handleSubmit = (values, formikBag) => {
        const { username, password } = values;
        dispatch(logIn({ username, password }));
        formikBag.setSubmitting(false);
        props.onSubmit();
        formikBag.resetForm();
    };

    return (
        <>
            <h1>Auth</h1>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(4, "Too Short!")
                        .max(50, "Too Long!")
                        .required("Required")
                        .notOneOf(["oleg"], "Username taken"),
                    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
                })}
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
                </Form>
            </Formik>
        </>
    );
};

AuthorizationDrawer.propTypes = {
    onSubmit: PropTypes.func,
};

export default AuthorizationDrawer;
