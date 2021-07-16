import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, Avatar, Popover } from "antd";
import { FileOutlined, InfoCircleOutlined, ShareAltOutlined, UserOutlined } from "@ant-design/icons";

import ProfileMenu from "../ProfileMenu/ProfileMenu";

import { menuLinks } from "../../config/constants/menu";
import Styles from "./Styles";

const Header = () => {
    const location = useLocation();
    let selectedLink = menuLinks.get(location.pathname);
    // Todo: set link paths to constants

    return (
        <>
            <h1 style={Styles.title}>Harwex Notes</h1>
            <Menu style={Styles.menu} mode="horizontal" defaultSelectedKeys={[selectedLink]}>
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
            <Popover title="User 1" placement="bottomRight" content={<ProfileMenu />} trigger="click">
                <Avatar size="large" style={Styles.avatar} icon={<UserOutlined />} />
            </Popover>
        </>
    );
};

export default Header;
