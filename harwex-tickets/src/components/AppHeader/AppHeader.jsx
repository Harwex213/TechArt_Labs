import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { RoutePaths } from "../../config/constants/RoutePaths";
import styles from "./styles";

const AppHeader = () => {
    const location = useLocation();

    return (
        <div style={styles.layout}>
            <h1 style={styles.location}>{location.pathname}</h1>
            <Link style={styles.avatar} to={RoutePaths.auth}>
                <Avatar size="large" icon={<UserOutlined />} />
            </Link>
        </div>
    );
};

export default AppHeader;
