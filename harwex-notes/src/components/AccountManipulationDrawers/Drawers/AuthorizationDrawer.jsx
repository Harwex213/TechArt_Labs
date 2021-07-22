import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

import { logIn } from "../../../slices/userSlice";

import { TryFindUser } from "../../../api/auth";

const AuthorizationDrawer = (props) => {
    const dispatch = useDispatch();

    const handleSubmit = async (values, formikBag) => {
        const isUserExist = await TryFindUser(values);

        if (isUserExist) {
            dispatch(logIn(values.username));
            props.onSubmit();
            formikBag.resetForm();
            localStorage.setItem("user", JSON.stringify({ username: values.username }));
        } else {
            formikBag.setFieldError("username", "Invalid data");
        }
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
