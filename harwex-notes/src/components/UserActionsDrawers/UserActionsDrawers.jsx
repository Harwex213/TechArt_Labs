import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Drawer } from "antd";

import { userActions } from "../../config/constants/userActions";
import { none, selectCurrentAction } from "../../slices/userActionsSlice";

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

    return (
        <>
            <Drawer visible={isProfileVisible} onClose={handleUserActionDrawerClose}>
                <h1>Profile</h1>
            </Drawer>
            <Drawer visible={isAuthVisible} onClose={handleUserActionDrawerClose}>
                <h1>Auth</h1>
            </Drawer>
            <Drawer visible={isRegistrationVisible} onClose={handleUserActionDrawerClose}>
                <h1>Registration</h1>
            </Drawer>
        </>
    );
};

export default UserActionsDrawers;
