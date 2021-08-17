import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";

import { Menu } from "antd";
import { VideoCameraOutlined, VideoCameraAddOutlined, InfoCircleOutlined } from "@ant-design/icons";

import UserRoles from "../../config/constants/UserRoles";
import { RoutePaths } from "../../config/constants/RoutePaths";

const GuestMenu = () => (
    <>
        <Menu.Item key={0} icon={<VideoCameraOutlined />}>
            <Link to={RoutePaths.movies}>Movies</Link>
        </Menu.Item>
        <Menu.Item key={1} icon={<InfoCircleOutlined />}>
            <Link to={RoutePaths.about}>About</Link>
        </Menu.Item>
    </>
);
const GuestMenuRouteId = {
    [RoutePaths.movies]: "0",
    [RoutePaths.about]: "1",
};

const UserMenu = () => (
    <>
        <Menu.Item key={0} icon={<VideoCameraOutlined />}>
            <Link to={RoutePaths.movies}>Movies</Link>
        </Menu.Item>
        <Menu.Item key={1} icon={<InfoCircleOutlined />}>
            <Link to={RoutePaths.about}>About</Link>
        </Menu.Item>
    </>
);
const UserMenuRouteId = {
    [RoutePaths.movies]: "0",
    [RoutePaths.about]: "1",
};

const AdminMenu = () => (
    <>
        <Menu.Item key={0} icon={<VideoCameraAddOutlined />}>
            <Link to={RoutePaths.cinemas}>Cinemas</Link>
        </Menu.Item>
        <Menu.Item key={1} icon={<InfoCircleOutlined />}>
            <Link to={RoutePaths.about}>About</Link>
        </Menu.Item>
    </>
);
const AdminMenuRouteId = {
    [RoutePaths.cinemas]: "0",
    [RoutePaths.about]: "1",
};

const AppMenu = () => {
    const user = useSelector(selectUser);
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState();
    const [menu, setMenu] = useState(() => GuestMenu());

    useEffect(() => {
        switch (user.role) {
            case UserRoles.user:
                setMenu(UserMenu());
                setSelectedKey(UserMenuRouteId[location.pathname]);
                break;
            case UserRoles.admin:
                setMenu(AdminMenu());
                setSelectedKey(AdminMenuRouteId[location.pathname]);
                break;
            default:
                setMenu(GuestMenu());
                setSelectedKey(GuestMenuRouteId[location.pathname]);
                break;
        }
    }, [location.pathname, user.role]);

    return (
        <Menu theme="dark" mode="inline" selectedKeys={selectedKey}>
            {menu}
        </Menu>
    );
};

export default AppMenu;
