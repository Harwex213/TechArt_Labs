import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Row } from "antd";
import notesExample from "./notes";
import Note from "../Note/Note";

import "./NoteList.css";

function NoteList(props) {
    const listJsxNotes = notesExample.map((note) => (
        <Col span={6} key={note.id} style={props.colStyle}>
            <Button
                onClick={() => props.onNoteChoose(note)}
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "0",
                    whiteSpace: "normal",
                    textAlign: "start",
                }}
            >
                <Note
                    title={note.title}
                    description={note.description}
                    dateCreation={note.dateCreation}
                    cardStyle={{
                        border: "0",
                    }}
                />
            </Button>
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
    chosenNote: PropTypes.object,
    colStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    onNoteChoose: PropTypes.func,
};

export default NoteList;
