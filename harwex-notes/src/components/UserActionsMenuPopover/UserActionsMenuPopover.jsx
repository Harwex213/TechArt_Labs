import React, { useState } from "react";

import { Popover } from "antd";

import UserActionsMenu from "../UserActionsMenu/UserActionsMenu";
import PropTypes from "prop-types";

const UserActionsMenuPopover = (props) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const handleProfileMenuOptionClick = () => setIsPopoverVisible(false);
    const handleVisibleChange = (visible) => setIsPopoverVisible(visible);

    return (
        <Popover
            trigger="click"
            visible={isPopoverVisible}
            onVisibleChange={handleVisibleChange}
            title="User 1"
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
