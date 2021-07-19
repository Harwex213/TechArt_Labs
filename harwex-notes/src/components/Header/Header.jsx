import React from "react";

import { UserOutlined } from "@ant-design/icons";

import Navbar from "../Navbar/Navbar";
import UserActionsMenuPopover from "../UserActionsMenuPopover/UserActionsMenuPopover";

import Styles from "./Styles";
import { Avatar } from "antd";

const Header = () => {
    return (
        <>
            <h1 style={Styles.title}>Harwex Notes</h1>
            <Navbar />
            <UserActionsMenuPopover
                layoutInside={<Avatar style={Styles.avatar} size="large" icon={<UserOutlined />} />}
            />
        </>
    );
};

export default Header;
