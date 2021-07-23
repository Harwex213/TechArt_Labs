import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu } from "antd";
import { FileOutlined, InfoCircleOutlined, ShareAltOutlined } from "@ant-design/icons";

import { RoutePaths, RoutePathsId } from "../../config/constants/routePaths";

import Styles from "./Styles";

const AppNavbar = () => {
    const location = useLocation();
    let selectedLink = RoutePathsId[location.pathname];

    return (
        <Menu style={Styles.layout} mode="horizontal" defaultSelectedKeys={[selectedLink]}>
            <Menu.Item key={0} icon={<FileOutlined />}>
                <Link to={RoutePaths.notes}>My Notes</Link>
            </Menu.Item>
            <Menu.Item key={1} icon={<ShareAltOutlined />}>
                <Link to={RoutePaths.sharedNotes}>Shared Notes</Link>
            </Menu.Item>
            <Menu.Item key={2} icon={<InfoCircleOutlined />}>
                <Link to={RoutePaths.about}>About</Link>
            </Menu.Item>
        </Menu>
    );
};

export default AppNavbar;
