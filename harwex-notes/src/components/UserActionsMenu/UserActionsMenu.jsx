import React from "react";
import PropTypes from "prop-types";

import { Row, Button } from "antd";
import Styles from "./Styles";

const UserActionsMenu = (props) => {
    return (
        <>
            <Row>
                <Button style={Styles.action} type="link" onClick={props.onClick}>
                    Profile
                </Button>
            </Row>
            <Row>
                <Button style={Styles.action} type="link" onClick={props.onClick}>
                    Log out
                </Button>
            </Row>
        </>
    );
};

UserActionsMenu.propTypes = {
    onClick: PropTypes.func,
};

export default UserActionsMenu;
