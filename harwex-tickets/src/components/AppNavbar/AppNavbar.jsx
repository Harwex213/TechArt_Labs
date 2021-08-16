import React from "react";

import AppMenu from "../AppMenu/AppMenu";

import styles from "./styles";

const AppNavbar = () => {
    return (
        <div style={styles.layout}>
            <div style={styles.logo} />
            <AppMenu />
        </div>
    );
};

export default AppNavbar;
