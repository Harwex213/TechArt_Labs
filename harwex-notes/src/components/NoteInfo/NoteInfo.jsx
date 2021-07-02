import React from "react";
import PropTypes from "prop-types";

import { Typography } from "antd";

import DateFormat from "../../utils/DateFormat";

import "./NoteInfo.css";

const { Title, Paragraph } = Typography;

function NoteInfo(props) {
    const note = props.note;
    let info;
    if (!note) {
        info = "Select note to display...";
    } else {
        info = (
            <Typography>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Title>Note: {note.id}</Title>
                    <Title level={5}>{DateFormat(note.dateCreation)}</Title>
                </div>

                <Paragraph>{note.description}</Paragraph>
            </Typography>
        );
    }
    return <div>{info}</div>;
}

NoteInfo.propTypes = {
    note: PropTypes.object,
};

export default NoteInfo;
