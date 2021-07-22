import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Drawer } from "antd";

import AuthorizationDrawer from "./Drawers/AuthorizationDrawer";

import { useWindowWidth } from "../../utils/useWindowWidth";
import { AccountManipulationOptions } from "../../config/constants/accountManipulationOptions";
import RegistrationDrawer from "./Drawers/RegistrationDrawer";

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
            <Drawer width={windowWidth * 0.45} visible={isProfileVisible} onClose={handleDrawerClose}>
                <h1>Profile</h1>
            </Drawer>
            <Drawer width={windowWidth * 0.3} visible={isAuthVisible} onClose={handleDrawerClose}>
                <AuthorizationDrawer onSubmit={handleDrawerClose} />
            </Drawer>
            <Drawer width={windowWidth * 0.45} visible={isRegistrationVisible} onClose={handleDrawerClose}>
                <RegistrationDrawer onSubmit={handleDrawerClose} />
            </Drawer>
        </>
    );
};

AccountManipulationDrawers.propTypes = {
    currentOption: PropTypes.string,
    onDrawerClose: PropTypes.func,
};

export default AccountManipulationDrawers;
