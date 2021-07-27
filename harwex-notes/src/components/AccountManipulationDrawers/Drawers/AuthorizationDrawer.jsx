import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Form, Input, SubmitButton } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

import { logIn } from "../../../slices/userSlice";

import useLogInUser from "../../../hooks/useLogInUser";
import useFindUser from "../../../hooks/useFindUser";

const authorizationValidationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
});

const AuthorizationDrawer = (props) => {
    const { mutateAsync: tryFindUser } = useFindUser();
    const { mutateAsync: fetchLogIn } = useLogInUser();
    const dispatch = useDispatch();

    const handleSubmit = async (values, formikBag) => {
        const handleRequestError = () => {
            formikBag.setFieldError("username", "Server doesn't response");
        };

        const handleLogIn = () => {
            dispatch(logIn(values.username));
            props.onAuth();
            formikBag.resetForm();
        };

        const handleIsUserExist = async (isUserExist) => {
            if (isUserExist) {
                await fetchLogIn(values, {
                    onSuccess: handleLogIn,
                    onError: handleRequestError,
                });
            } else {
                formikBag.setFieldError("username", "User not exist or wrong password");
            }
        };

        await tryFindUser(values, {
            onSuccess: handleIsUserExist,
            onError: handleRequestError,
        });
    };

    return (
        <>
            <h1>Authorization</h1>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={authorizationValidationSchema}
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
    onAuth: PropTypes.func,
};

export default AuthorizationDrawer;
