import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import RoutePaths from "../../config/constants/RoutePaths";
import { UserRoles } from "../../config/constants/User";
import styles from "./styles";

const AppHeader = () => {
    const location = useLocation();
    const locationName = location.pathname[1].toUpperCase() + location.pathname.substring(2);
    const user = useSelector(selectUser);

    return (
        <div style={styles.layout}>
            <h1 style={styles.location}>{locationName}</h1>
            <Link
                style={styles.avatar}
                to={user.role !== UserRoles.guest ? RoutePaths.account : RoutePaths.auth}
            >
                <Avatar size="large" icon={<UserOutlined />} />
            </Link>
        </div>
    );
};

export default AppHeader;
