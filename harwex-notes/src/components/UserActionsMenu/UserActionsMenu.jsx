import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Row, Button } from "antd";

import { logOut, selectIsGuest } from "../../app/userSlice";

import Styles from "./Styles";

const GuestActions = ({ buttonProps }) => {
    return (
        <>
            <Row>
                <Button {...buttonProps}>Authorization</Button>
            </Row>
            <Row>
                <Button {...buttonProps}>Registration</Button>
            </Row>
        </>
    );
};

GuestActions.propTypes = {
    buttonProps: PropTypes.object,
};

const LoggedUserActions = ({ buttonProps }) => {
    const dispatch = useDispatch();

    const handleLogOutAction = () => {
        dispatch(logOut());
        buttonProps.onClick();
    };

    return (
        <>
            <Row>
                <Button {...buttonProps}>Profile</Button>
            </Row>
            <Row>
                <Button {...buttonProps} onClick={handleLogOutAction}>
                    Log out
                </Button>
            </Row>
        </>
    );
};

LoggedUserActions.propTypes = {
    buttonProps: PropTypes.object,
};

const UserActionsMenu = (props) => {
    const isUserGuest = useSelector(selectIsGuest);
    const buttonProps = {
        style: Styles.action,
        type: "link",
        onClick: props.onClick,
    };

    return isUserGuest ? (
        <GuestActions buttonProps={buttonProps} />
    ) : (
        <LoggedUserActions buttonProps={buttonProps} />
    );
};

UserActionsMenu.propTypes = {
    onClick: PropTypes.func,
};

export default UserActionsMenu;
