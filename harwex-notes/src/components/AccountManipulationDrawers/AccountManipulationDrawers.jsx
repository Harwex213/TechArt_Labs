import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Drawer } from "antd";

import AuthorizationDrawer from "./Drawers/AuthorizationDrawer";

import { useWindowWidth } from "../../utils/useWindowWidth";
import { AccountManipulationOptions } from "../../config/constants/accountManipulationOptions";

const AccountManipulationDrawers = (props) => {
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [isAuthVisible, setIsAuthVisible] = useState(false);
    const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
    const handleDrawerClose = () => {
        setIsProfileVisible(false);
        setIsAuthVisible(false);
        setIsRegistrationVisible(false);
        props.onDrawerClose();
    };

    useEffect(() => {
        switch (props.currentOption) {
            case AccountManipulationOptions.profile:
                setIsProfileVisible(true);
                break;
            case AccountManipulationOptions.authorization:
                setIsAuthVisible(true);
                break;
            case AccountManipulationOptions.registration:
                setIsRegistrationVisible(true);
                break;
            default:
                break;
        }
    }, [props.currentOption]);

    const windowWidth = useWindowWidth();

    return (
        <>
            <Drawer visible={isProfileVisible} onClose={handleDrawerClose}>
                <h1>Profile</h1>
            </Drawer>
            <Drawer width={windowWidth * 0.45} visible={isAuthVisible} onClose={handleDrawerClose}>
                <AuthorizationDrawer onSubmit={handleDrawerClose} />
            </Drawer>
            <Drawer visible={isRegistrationVisible} onClose={handleDrawerClose}>
                <h1>Registration</h1>
            </Drawer>
        </>
    );
};

AccountManipulationDrawers.propTypes = {
    currentOption: PropTypes.string,
    onDrawerClose: PropTypes.func,
};

export default AccountManipulationDrawers;
