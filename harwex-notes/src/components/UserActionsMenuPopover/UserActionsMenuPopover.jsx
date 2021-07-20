import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Popover } from "antd";

import UserActionsMenu from "../UserActionsMenu/UserActionsMenu";

import { selectUserName } from "../../slices/userSlice";

const UserActionsMenuPopover = (props) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const handleProfileMenuOptionClick = () => setIsPopoverVisible(false);
    const handleVisibleChange = (visible) => setIsPopoverVisible(visible);

    const greetingToUser = "Hello, " + useSelector(selectUserName);

    return (
        <Popover
            trigger="click"
            visible={isPopoverVisible}
            onVisibleChange={handleVisibleChange}
            title={greetingToUser}
            placement="bottomRight"
            content={<UserActionsMenu onClick={handleProfileMenuOptionClick} />}
        >
            {props.layoutInside}
        </Popover>
    );
};

UserActionsMenuPopover.propTypes = {
    layoutInside: PropTypes.element,
};

export default UserActionsMenuPopover;
