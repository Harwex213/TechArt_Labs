import React from "react";
import PropTypes from "prop-types";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { deleteHall, updateHall } from "../../redux/actions/cinemas";

import { Button, List, notification } from "antd";
import { Formik } from "formik";
import { Form, InputNumber, SubmitButton } from "formik-antd";
import * as Yup from "yup";

import HallAdd from "../HallAdd/HallAdd";

import styles from "./styles";

const hallValidationSchema = Yup.object().shape({
    rowsAmount: Yup.number().required("Required"),
    colsAmount: Yup.number().required("Required"),
});

const HallsList = ({ cinemaId, halls }) => {
    let id = 1;
    const dispatch = useDispatch();

    const handleUpdate = async (values, formikBag, hall) => {
        try {
            const result = await dispatch(
                updateHall({
                    id: hall.id,
                    cinemaId,
                    rowsAmount: values.rowsAmount,
                    colsAmount: values.colsAmount,
                })
            );
            unwrapResult(result);
            notification["success"]({
                message: "Successfully updated.",
            });
        } catch (e) {
            formikBag.setFieldError("name", e.message);
        }
    };

    const handleDelete = async (hall) => {
        try {
            const result = await dispatch(
                deleteHall({
                    id: hall.id,
                    cinemaId,
                })
            );
            unwrapResult(result);
            notification["success"]({
                message: "Successfully deleted.",
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
            <List
                itemLayout="vertical"
                dataSource={halls}
                split={false}
                renderItem={(item) => (
                    <List.Item>
                        <Formik
                            initialValues={{
                                rowsAmount: item.rowsAmount,
                                colsAmount: item.colsAmount,
                            }}
                            validationSchema={hallValidationSchema}
                            onSubmit={(values, formikBag) => handleUpdate(values, formikBag, item)}
                        >
                            <Form style={styles.form}>
                                <p style={styles.name}>Hall {id++}</p>
                                <p style={styles.description}>Rows</p>
                                <Form.Item name="rowsAmount" style={styles.input}>
                                    <InputNumber name="rowsAmount" min={1} max={255} />
                                </Form.Item>
                                <p style={styles.description}>Cols</p>
                                <Form.Item name="colsAmount" style={styles.lastInput}>
                                    <InputNumber name="colsAmount" min={1} max={255} />
                                </Form.Item>
                                <div style={styles.wrapper}>
                                    <SubmitButton type="default" style={styles.input}>
                                        Save
                                    </SubmitButton>
                                    <Button onClick={() => handleDelete(item)}>Delete</Button>
                                </div>
                            </Form>
                        </Formik>
                    </List.Item>
                )}
            />
            <HallAdd cinemaId={cinemaId} />
        </>
    );
};

HallsList.propTypes = {
    cinemaId: PropTypes.number,
    halls: PropTypes.array,
};

export default HallsList;
