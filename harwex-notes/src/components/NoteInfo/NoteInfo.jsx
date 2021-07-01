import React from "react";
import PropTypes from "prop-types";

import { Layout } from "antd";

import "./NoteInfo.css";

const { Sider } = Layout;

function NoteInfo(props) {
    let info = null;
    console.log(props.note);
    if (!props.note) {
        info = "Select note to display...";
    }
    return (
        <Sider className={props.className} theme="light" collapsedWidth={0}>
            <div className="noteInfo__layout">{info}</div>
        </Sider>
    );
}

NoteInfo.propTypes = {
    className: PropTypes.string,
    note: PropTypes.object,
};

export default NoteInfo;
