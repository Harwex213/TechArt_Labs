import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import PropTypes from "prop-types";

import { Menu } from "antd";

import { selectUserName, selectIsGuest, selectLogOutStatus } from "../../redux/userSlice";
import { logOut } from "../../redux/actions/auth";

import { AccountManipulationOptions } from "../../config/constants/accountManipulationOptions";

import Styles from "./Styles";

const GuestMenu = (props) => {
    const handleOpenAuth = () => props.onSelectOption(AccountManipulationOptions.authorization);
    const handleOpenRegistration = () => props.onSelectOption(AccountManipulationOptions.registration);

    return (
        <>
            <Menu.Item key="AuthOption" onClick={handleOpenAuth}>
                Authorization
            </Menu.Item>
            <Menu.Item key="RegistrationOption" onClick={handleOpenRegistration}>
                Registration
            </Menu.Item>
        </>
    );
};

GuestMenu.propTypes = {
    onSelectOption: PropTypes.func,
};

const LoggedUserMenu = (props) => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const { status } = useSelector(selectLogOutStatus);

    const handleOpenProfile = () => props.onSelectOption(AccountManipulationOptions.profile);
    const handleLogOutAction = async () => {
        try {
            if (status === "idle" || status === "fulfilled") {
                const result = await dispatch(logOut({ username }));
                unwrapResult(result);
            }
        } catch (e) {
            alert("Log out failed: " + e.message);
        }
    };

    return (
        <>
            <Menu.Item key="profileOption" onClick={handleOpenProfile}>
                Profile
            </Menu.Item>
            <Menu.Item key="logOutOption" onClick={handleLogOutAction}>
                Log out
            </Menu.Item>
        </>
    );
};

LoggedUserMenu.propTypes = {
    onSelectOption: PropTypes.func,
};

const AccountManipulationMenu = (props) => {
    const isUserGuest = useSelector(selectIsGuest);
    const greetingToUser = "Hello, " + useSelector(selectUserName);

    return (
        <>
            <p style={Styles.greetingToUser}>{greetingToUser}</p>
            {isUserGuest ? (
                <GuestMenu onSelectOption={props.onSelectOption} />
            ) : (
                <LoggedUserMenu onSelectOption={props.onSelectOption} />
            )}
        </>
    );
};

AccountManipulationMenu.propTypes = {
    onSelectOption: PropTypes.func,
};

export default AccountManipulationMenu;
