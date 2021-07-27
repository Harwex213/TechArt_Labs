import React from "react";
import PropTypes from "prop-types";

import { Col, Row } from "antd";

import Note from "../Note/Note";

const NotesList = (props) => {
    return (
        <Row style={props.rowStyle} justify="start" gutter={[20, 20]}>
            {props.notes.map((note) => (
                <Col span={6} key={note.id}>
                    <Note note={note} onClick={props.onNoteChoose} />
                </Col>
            ))}
        </Row>
    );
};

NotesList.propTypes = {
    notes: PropTypes.array,
    colStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    onNoteChoose: PropTypes.func,
};

export default NotesList;
