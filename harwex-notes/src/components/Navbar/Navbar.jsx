import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu } from "antd";
import { FileOutlined, InfoCircleOutlined, ShareAltOutlined } from "@ant-design/icons";

import { menuLinks } from "../../config/constants/menu";

import Styles from "./Styles";

const Navbar = () => {
    const location = useLocation();
    let selectedLink = menuLinks.get(location.pathname);
    // Todo: set link paths to constants

    return (
        <Menu style={Styles.layout} mode="horizontal" defaultSelectedKeys={[selectedLink]}>
            <Menu.Item key={0} icon={<FileOutlined />}>
                <Link to="/notes">My Notes</Link>
            </Menu.Item>
            <Menu.Item key={1} icon={<ShareAltOutlined />}>
                <Link to="/shared-notes">Shared Notes</Link>
            </Menu.Item>
            <Menu.Item key={2} icon={<InfoCircleOutlined />}>
                <Link to="/about">About</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
