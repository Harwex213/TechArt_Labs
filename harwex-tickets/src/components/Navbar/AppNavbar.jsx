import React from "react";

import { Link, useLocation } from "react-router-dom";

import { Menu } from "antd";
import { VideoCameraOutlined, InfoCircleOutlined } from "@ant-design/icons";

import { RoutePaths, RoutePathsId } from "../../config/constants/RoutePaths";

const AppNavbar = () => {
    const location = useLocation();
    let selectedLink = RoutePathsId[location.pathname];

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[selectedLink]}>
            <Menu.Item key={0} icon={<VideoCameraOutlined />}>
                <Link to={RoutePaths.movies}>Movies</Link>
            </Menu.Item>
            <Menu.Item key={1} icon={<InfoCircleOutlined />}>
                <Link to={RoutePaths.about}>About</Link>
            </Menu.Item>
        </Menu>
    );
};

export default AppNavbar;
