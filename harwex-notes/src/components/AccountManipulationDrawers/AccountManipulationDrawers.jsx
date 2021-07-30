import React from "react";
import PropTypes from "prop-types";

import { Drawer } from "antd";

import ProfileDrawer from "./Drawers/ProfileDrawer";
import AuthorizationDrawer from "./Drawers/AuthorizationDrawer";
import RegistrationDrawer from "./Drawers/RegistrationDrawer";

import { AccountManipulationOptions } from "../../config/constants/accountManipulationOptions";
import { useWindowWidth } from "../../utils/useWindowWidth";

const AccountManipulationDrawers = (props) => {
    const handleDrawerClose = () => {
        props.onDrawerClose();
    };

    const windowWidth = useWindowWidth();

    return (
        <>
            <Drawer
                width={windowWidth * 0.45}
                visible={props.currentOption === AccountManipulationOptions.profile}
                onClose={handleDrawerClose}
            >
                <ProfileDrawer />
            </Drawer>
            <Drawer
                width={windowWidth * 0.3}
                visible={props.currentOption === AccountManipulationOptions.authorization}
                onClose={handleDrawerClose}
            >
                <AuthorizationDrawer onAuth={handleDrawerClose} />
            </Drawer>
            <Drawer
                width={windowWidth * 0.45}
                visible={props.currentOption === AccountManipulationOptions.registration}
                onClose={handleDrawerClose}
            >
                <RegistrationDrawer onReg={handleDrawerClose} />
            </Drawer>
        </>
    );
};

AccountManipulationDrawers.propTypes = {
    currentOption: PropTypes.string,
    onDrawerClose: PropTypes.func,
};

export default AccountManipulationDrawers;
