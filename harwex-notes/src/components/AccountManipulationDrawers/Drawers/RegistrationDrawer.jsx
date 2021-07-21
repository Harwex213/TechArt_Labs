import React from "react";

import { Form, Input, SubmitButton, DatePicker } from "formik-antd";
import { Formik } from "formik";
import * as Yup from "yup";

const registrationValidationSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .notOneOf(["oleg"], "Username taken"),
    firstname: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    lastname: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Should be an email").required("Required"),
    dateOfBirth: Yup.date().required("Required"),
    password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please, repeat your password"),
});

const RegistrationDrawer = () => {
    const handleSubmit = (values, formikBag) => {
        console.log(values);
        formikBag.setSubmitting(false);
        formikBag.resetForm();
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

export default RegistrationDrawer;
