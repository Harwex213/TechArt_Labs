import React from "react";
import PropTypes from "prop-types";

import { Card, Row, Col } from "antd";

import Styles from "./styled";

const Note = (props) => {
    return (
        <Card style={props.style}>
            <>
                <Row>
                    <Col style={Styles.note__title}>
                        {props.title.length < 20 ? props.title : props.title.substring(0, 20).concat("...")}
                    </Col>
                </Row>
                <Row>
                    <Col>{props.description.substring(0, 50).concat("...")}</Col>
                </Row>
                <Row>
                    <Col style={Styles.note__dateCreation}>{props.dateCreation.substring(0, 10)}</Col>
                </Row>
            </>
        </Card>
    );
};

Note.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    dateCreation: PropTypes.string,
};

export default Note;
