import React from "react";

import AppLeftMenu from "../AppMenu/AppLeftMenu";

import styles from "./styles";

const AppLeftNavbar = () => {
    return (
        <div style={styles.layout}>
            <div style={styles.logo} />
            <AppLeftMenu />
        </div>
    );
};

export default AppLeftNavbar;
