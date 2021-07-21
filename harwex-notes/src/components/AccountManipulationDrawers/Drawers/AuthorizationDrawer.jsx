import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

import { logIn } from "../../../slices/userSlice";

const AuthorizationDrawer = (props) => {
    const dispatch = useDispatch();
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("http://localhost:3001/posts").then((res) => res.json())
    );

    useEffect(() => {
        console.log(isLoading);
        console.log(error);
        console.log(data);
    }, [isLoading, error, data]);

    const handleSubmit = (values, formikBag) => {
        dispatch(logIn(values.username));
        formikBag.setSubmitting(false);
        props.onSubmit();
        formikBag.resetForm();
    };

    return (
        <>
            <h1>Authorization</h1>
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
                <Form
                    wrapperCol={{
                        xxl: { span: 8 },
                        xl: { span: 10 },
                        lg: { span: 14 },
                        sm: { span: 24 },
                    }}
                >
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
