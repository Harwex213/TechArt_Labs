import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Row } from "antd";

import Note from "../Note/Note";

import Styles from "./styled";

const NotesList = (props) => {
    const jsxNotes = props.notes.map((note) => {
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

NotesList.propTypes = {
    notes: PropTypes.array,
    colStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    onNoteChoose: PropTypes.func,
};

export default NotesList;
