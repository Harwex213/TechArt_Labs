import React from "react";
import PropTypes from "prop-types";

import { Col, Row } from "antd";
import notesExample from "./notes";
import Note from "../Note/Note";

import "./NoteList.css";

function NoteList(props) {
    const listJsxNotes = notesExample.map((note) => (
        <Col span={6} key={note.id} style={props.colStyle}>
            <Note
                className="noteList__note"
                title={note.title}
                description={note.description}
                dateCreation={note.dateCreation}
            />
        </Col>
    ));

    return (
        <>
            <Row gutter={[20, 20]} justify="start" style={props.rowStyle}>
                {listJsxNotes}
            </Row>
        </>
    );
}

NoteList.propTypes = {
    colStyle: PropTypes.object,
    rowStyle: PropTypes.object,
};

export default NoteList;
