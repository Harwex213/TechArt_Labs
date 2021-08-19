import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, SubmitButton } from "formik-antd";
import { Modal, notification } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import { createCinema } from "../../redux/actions/cinemas";

const cinemaAddValidationSchema = Yup.object().shape({
    name: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    cityName: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
});

const CinemaAdd = ({ style, onCinemaAdd }) => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const [isCinemaAddModalVisible, setIsCinemaAddModalVisible] = useState(false);

    const showModal = () => {
        setIsCinemaAddModalVisible(true);
    };

    const handleCancel = () => {
        setIsCinemaAddModalVisible(false);
    };

    const handleSubmit = async (values, formikBag) => {
        try {
            const result = await dispatch(createCinema(values));
            unwrapResult(result);
            onCinemaAdd(result.payload);
            setIsCinemaAddModalVisible(false);
            formikBag.resetForm();
            notification["success"]({
                message: "Successfully created.",
            });
        } catch (e) {
            notification["error"]({
                message: "Something went wrong...",
                description: e.message,
            });
        }
    };

    return (
        <>
            <VideoCameraAddOutlined onClick={showModal} style={style} />
            <Modal
                title="Add Cinema"
                visible={isCinemaAddModalVisible}
                onCancel={handleCancel}
                footer={<></>}
            >
                <Formik
                    innerRef={formRef}
                    initialValues={{
                        name: "",
                        cityName: "",
                    }}
                    validationSchema={cinemaAddValidationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Form.Item name="name">
                            <Input name="name" placeholder="Cinema name" />
                        </Form.Item>
                        <Form.Item name="cityName">
                            <Input name="cityName" placeholder="City name" />
                        </Form.Item>
                        <SubmitButton>Create</SubmitButton>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
};
CinemaAdd.propTypes = {
    style: PropTypes.object,
    onCinemaAdd: PropTypes.func,
};

export default CinemaAdd;
