import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSlice";

import LogOutButton from "../../components/LogOutButton/LogOutButton";

import styles from "./styles";

const AccountPage = () => {
    const user = useSelector(selectUser);

    return (
        <>
            <div style={styles.title}>
                <h1 style={styles.name}>{user.firstname + " " + user.lastname}</h1>
                <LogOutButton style={styles.logOutButton} />
            </div>
            <div style={styles.subtitle}>
                <h2 style={styles.username}>{user.username}</h2>
            </div>
        </>
    );
};

export default AccountPage;
