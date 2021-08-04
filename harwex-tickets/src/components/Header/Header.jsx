import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import AppNavbar from "../Navbar/AppNavbar";

import { RoutePaths } from "../../config/constants/RoutePaths";
import styles from "./styles";

const Header = () => {
    return (
        <>
            <h1>Harwex Tickets</h1>
            <AppNavbar />
            <Link style={styles.avatar} to={RoutePaths.auth}>
                <Avatar size="large" icon={<UserOutlined />} />
            </Link>
        </>
    );
};

export default Header;
