import React from "react";

import Navbar from "../Navbar/Navbar";
import AccountManipulator from "../AccountManipulator/AccountManipulator";

import Styles from "./Styles";

const Header = () => {
    return (
        <>
            <h1 style={Styles.title}>Harwex Notes</h1>
            <Navbar />
            <AccountManipulator style={Styles.account} />
        </>
    );
};

export default Header;
