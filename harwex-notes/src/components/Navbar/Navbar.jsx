import React from "react";
import PropTypes from "prop-types";

import { Layout, Menu, Button } from "antd";
import {
    FileOutlined,
    ShareAltOutlined,
    InfoCircleOutlined,
    LeftOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function Navbar(props) {
    let menuItemId = 0;
    return (
        <Sider
            className={props.className}
            theme="light"
            collapsed
            collapsedWidth={50}
        >
            <Button
                shape="circle"
                icon={<LeftOutlined />}
                style={{
                    display: "flex",
                    margin: "8px auto",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            />
            <Menu
                mode="inline"
                defaultSelectedKeys={["0"]}
                style={{
                    borderRight: "none",
                }}
            >
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
        </Sider>
    );
}

Navbar.propTypes = {
    className: PropTypes.string,
};

export default Navbar;
