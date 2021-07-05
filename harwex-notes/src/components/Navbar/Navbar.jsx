import React from "react";
import PropTypes from "prop-types";

import { Menu } from "antd";
import { FileOutlined, ShareAltOutlined, InfoCircleOutlined } from "@ant-design/icons";

function Navbar(props) {
    return (
        <Menu mode="inline" defaultSelectedKeys={["0"]} style={props.style}>
            <Menu.Item key={0} icon={<FileOutlined />}>
                My Notes
            </Menu.Item>
            <Menu.Item key={1} icon={<ShareAltOutlined />}>
                Shared Notes
            </Menu.Item>
            <Menu.Item key={2} icon={<InfoCircleOutlined />}>
                About
            </Menu.Item>
        </Menu>
    );
}

Navbar.propTypes = {
    style: PropTypes.object,
};

export default Navbar;
