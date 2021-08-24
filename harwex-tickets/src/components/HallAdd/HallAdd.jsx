import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Button, Modal, notification } from "antd";
import { Formik } from "formik";
import { Form, InputNumber, SubmitButton } from "formik-antd";

import { createHall } from "../../redux/actions/cinemas";
import { unwrapResult } from "@reduxjs/toolkit";
import * as Yup from "yup";

const hallValidationSchema = Yup.object().shape({
    rowsAmount: Yup.number().required("Required"),
    colsAmount: Yup.number().required("Required"),
});

const HallAdd = ({ cinemaId }) => {
    const formRef = useRef();
    const dispatch = useDispatch();
    const [isHallAddModalVisible, setIsHallAddModalVisible] = useState(false);

    const showModal = () => {
        setIsHallAddModalVisible(true);
    };

    const handleCancel = () => {
        setIsHallAddModalVisible(false);
    };

    const handleSubmit = async (values, formikBag) => {
        try {
            const result = await dispatch(
                createHall({ cinemaId, rowsAmount: values.rowsAmount, colsAmount: values.colsAmount })
            );
            unwrapResult(result);
            setIsHallAddModalVisible(false);
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
            <Button type="primary" onClick={showModal}>
                Add
            </Button>
            <Modal title="Add Hall" visible={isHallAddModalVisible} onCancel={handleCancel} footer={<></>}>
                <Formik
                    innerRef={formRef}
                    initialValues={{
                        rowsAmount: 1,
                        colsAmount: 1,
                    }}
                    validationSchema={hallValidationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Form.Item name="rowsAmount">
                            <p>Rows</p>
                            <InputNumber name="rowsAmount" min={1} max={255} />
                        </Form.Item>
                        <Form.Item name="colsAmount">
                            <p>Cols</p>
                            <InputNumber name="colsAmount" min={1} max={255} />
                        </Form.Item>
                        <SubmitButton>Create</SubmitButton>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
};

HallAdd.propTypes = {
    cinemaId: PropTypes.number,
};

export default HallAdd;
