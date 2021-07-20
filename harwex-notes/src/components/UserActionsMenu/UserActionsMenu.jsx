import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Row, Button } from "antd";

import { logOut, selectIsGuest } from "../../slices/userSlice";

import Styles from "./Styles";
import { authorization, profile, registration } from "../../slices/userActionsSlice";

const GuestActions = ({ buttonProps }) => {
    const dispatch = useDispatch();

    const handleOpenAuth = () => {
        dispatch(authorization());
        buttonProps.onClick();
    };
    const handleOpenRegistration = () => {
        dispatch(registration());
        buttonProps.onClick();
    };

    return (
        <>
            <Row>
                <Button {...buttonProps} onClick={handleOpenAuth}>
                    Authorization
                </Button>
            </Row>
            <Row>
                <Button {...buttonProps} onClick={handleOpenRegistration}>
                    Registration
                </Button>
            </Row>
        </>
    );
};

GuestActions.propTypes = {
    buttonProps: PropTypes.object,
};

const LoggedUserActions = ({ buttonProps }) => {
    const dispatch = useDispatch();

    const handleOpenProfile = () => {
        dispatch(profile());
        buttonProps.onClick();
    };
    const handleLogOutAction = () => {
        dispatch(logOut());
        buttonProps.onClick();
    };

    return (
        <>
            <Row>
                <Button {...buttonProps} onClick={handleOpenProfile}>
                    Profile
                </Button>
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
