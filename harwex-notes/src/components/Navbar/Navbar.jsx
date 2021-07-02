import React from "react";
import PropTypes from "prop-types";

import { Menu } from "antd";
import {
    FileOutlined,
    ShareAltOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";

function Navbar(props) {
    let menuItemId = 0;
    return (
        <Menu mode="inline" defaultSelectedKeys={["0"]} style={props.style}>
            <Menu.Item key={menuItemId} icon={<FileOutlined />}>
                My Notes
            </Menu.Item>
            <Menu.Item key={++menuItemId} icon={<ShareAltOutlined />}>
                Shared Notes
            </Menu.Item>
            <Menu.Item key={++menuItemId} icon={<InfoCircleOutlined />}>
                About
            </Menu.Item>
        </Menu>
    );
}

Navbar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Navbar;
