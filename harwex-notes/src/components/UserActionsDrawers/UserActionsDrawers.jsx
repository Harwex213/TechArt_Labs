import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer } from "antd";

import AuthorizationDrawer from "./Drawers/AuthorizationDrawer";

import { none, selectCurrentAction } from "../../slices/userActionsSlice";

import { userActions } from "../../config/constants/userActions";
import { useWindowWidth } from "../../utils/useWindowWidth";

const UserActionsDrawers = () => {
    const currentAction = useSelector(selectCurrentAction);
    const dispatch = useDispatch();

    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [isAuthVisible, setIsAuthVisible] = useState(false);
    const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);
    const handleUserActionDrawerClose = () => {
        setIsProfileVisible(false);
        setIsAuthVisible(false);
        setIsRegistrationVisible(false);
        dispatch(none());
    };

    useEffect(() => {
        switch (currentAction) {
            case userActions.profile:
                setIsProfileVisible(true);
                break;
            case userActions.authorization:
                setIsAuthVisible(true);
                break;
            case userActions.registration:
                setIsRegistrationVisible(true);
                break;
            default:
                break;
        }
    }, [currentAction]);

    const windowWidth = useWindowWidth();

    return (
        <>
            <Drawer visible={isProfileVisible} onClose={handleUserActionDrawerClose}>
                <h1>Profile</h1>
            </Drawer>
            <Drawer width={windowWidth * 0.45} visible={isAuthVisible} onClose={handleUserActionDrawerClose}>
                <AuthorizationDrawer onSubmit={handleUserActionDrawerClose} />
            </Drawer>
            <Drawer visible={isRegistrationVisible} onClose={handleUserActionDrawerClose}>
                <h1>Registration</h1>
            </Drawer>
        </>
    );
};

export default UserActionsDrawers;
