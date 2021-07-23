import React from "react";

import AppNavbar from "../AppNavbar/AppNavbar";
import AccountManipulator from "../AccountManipulator/AccountManipulator";

import Styles from "./Styles";

const Header = () => {
    return (
        <>
            <h1 style={Styles.title}>Harwex Notes</h1>
            <AppNavbar />
            <AccountManipulator style={Styles.account} />
        </>
    );
};

export default Header;
