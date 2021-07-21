import React, { useState } from "react";
import PropTypes from "prop-types";

import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

import AccountManipulationMenu from "../AccountManipulationMenu/AccountManipulationMenu";
import AccountManipulationDrawers from "../AccountManipulationDrawers/AccountManipulationDrawers";

import { AccountManipulationOptions } from "../../config/constants/accountManipulationOptions";

import Styles from "./Styles";

const AccountManipulator = (props) => {
    const [currentOption, setCurrentOption] = useState("");
    const handleSelectOption = (optionName) => {
        setCurrentOption(optionName);
    };
    const handleDrawerClose = () => {
        setCurrentOption(AccountManipulationOptions.none);
    };

    const overlay = (
        <Menu>
            <AccountManipulationMenu onSelectOption={handleSelectOption} />
        </Menu>
    );

    return (
        <>
            <Dropdown
                overlayStyle={Styles.layout}
                placement="bottomRight"
                arrow
                overlay={overlay}
                trigger={["click"]}
            >
                <Avatar style={props.style} size="large" icon={<UserOutlined />} />
            </Dropdown>

            <AccountManipulationDrawers currentOption={currentOption} onDrawerClose={handleDrawerClose} />
        </>
    );
};

AccountManipulator.propTypes = {
    style: PropTypes.object,
};

export default AccountManipulator;
