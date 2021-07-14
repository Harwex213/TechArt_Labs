import React from "react";
import PropTypes from "prop-types";

import { Card, Row, Col } from "antd";

import Styles from "./Styles";

const Note = (props) => {
    const handleNoteClick = () => {
        props.onClick(props.note.id);
    };

    return (
        <Card style={Styles.layout} onClick={handleNoteClick}>
            <Row>
                <Col style={Styles.title}>
                    {props.note.title.length < 20
                        ? props.note.title
                        : props.note.title.substring(0, 20).concat("...")}
                </Col>
                <Col>{props.note.description.substring(0, 50).concat("...")}</Col>
                <Col style={Styles.dateCreation}>{props.note.dateCreation.substring(0, 10)}</Col>
            </Row>
        </Card>
    );
};

Note.propTypes = {
    note: PropTypes.object,
    onClick: PropTypes.func,
};

export default Note;
