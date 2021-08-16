import React from "react";
import { Link } from "react-router-dom";

import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Formik } from "formik";
import { Form, Input, SubmitButton } from "formik-antd";
import * as Yup from "yup";

import { RoutePaths } from "../../config/constants/RoutePaths";
import styles from "./styles";

const authValidationSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
});

const AuthorizationPage = () => {
    const handleSubmit = async (values, _) => {
        console.log("submit");
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
