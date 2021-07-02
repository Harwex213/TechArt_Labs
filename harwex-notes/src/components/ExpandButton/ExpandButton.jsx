import React from "react";
import PropTypes from "prop-types";

import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function ExpandButton(props) {
    console.log(props.toLeft);
    console.log(props.toRight);
    const left = props.toLeft ? "-16px" : "auto";
    const right = props.toRight ? "-16px" : "auto";

    return (
        <Button
            shape="circle"
            icon={props.direction === "right" ? <RightOutlined /> : <LeftOutlined />}
            style={{
                display: "flex",
                position: "absolute",
                top: "calc(50% - 32px)",
                left: left,
                right: right,
                justifyContent: "center",
                alignItems: "center",
            }}
        />
    );
}

ExpandButton.propTypes = {
    direction: PropTypes.string,
    toRight: PropTypes.bool,
    toLeft: PropTypes.bool,
};

export default ExpandButton;
