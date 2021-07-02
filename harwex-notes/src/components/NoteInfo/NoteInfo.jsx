import React from "react";
import PropTypes from "prop-types";

import "./NoteInfo.css";

function NoteInfo(props) {
    let info = null;
    console.log(props.note);
    if (!props.note) {
        info = "Select note to display...";
    }
    return <div>{info}</div>;
}

NoteInfo.propTypes = {
    className: PropTypes.string,
    note: PropTypes.object,
};

export default NoteInfo;
