import React from "react";
import PropTypes from "prop-types";

import { Button, notification } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { unwrapResult } from "@reduxjs/toolkit";

const LogOutButton = ({ style }) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        try {
            const result = await dispatch(logout());
            unwrapResult(result);
        } catch (e) {
            notification["error"]({
                message: "Something went wrong...",
                description: e.message,
            });
        }
    };

    return (
        <Button style={style} type="primary" onClick={handleClick}>
            Log out
        </Button>
    );
};

LogOutButton.propTypes = {
    style: PropTypes.object,
};

export default LogOutButton;
