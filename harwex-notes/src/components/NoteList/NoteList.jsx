import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Row } from "antd";

import Note from "../Note/Note";
import notesExample from "./notes";

import Styles from "./styled";

const NoteList = (props) => {
    const jsxNotes = notesExample.map((note) => {
        const handleNoteChoose = () => {
            props.onNoteChoose(note);
        };

        return (
            <Col style={props.colStyle} span={6} key={note.id}>
                <Button style={Styles.noteList__noteWrapper} onClick={handleNoteChoose}>
                    <Note
                        style={Styles.noteList__note}
                        title={note.title}
                        description={note.description}
                        dateCreation={note.dateCreation}
                    />
                </Button>
            </Col>
        );
    });

    return (
        <>
            <Row style={props.rowStyle} justify="start" gutter={[20, 20]}>
                {jsxNotes}
            </Row>
        </>
    );
};

NoteList.propTypes = {
    chosenNote: PropTypes.object,
    colStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    onNoteChoose: PropTypes.func,
};

export default NoteList;
