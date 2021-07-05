import React from "react";
import PropTypes from "prop-types";

import { Typography } from "antd";

import DateFormat from "../../utils/DateFormat";

import Styles from "./styled";

const { Title, Paragraph } = Typography;

const NoteAdditionalInfo = (props) => {
    const note = props.note;
    let info;
    if (!note) {
        info = "Select note to display...";
    } else {
        info = (
            <Typography>
                <div style={Styles.info__title}>
                    <Title>Note: {note.id}</Title>
                    <Title level={5}>{DateFormat(note.dateCreation)}</Title>
                </div>

                <Paragraph>{note.description}</Paragraph>
            </Typography>
        );
    }
    return <div>{info}</div>;
};

NoteAdditionalInfo.propTypes = {
    note: PropTypes.object,
};

export default NoteAdditionalInfo;
