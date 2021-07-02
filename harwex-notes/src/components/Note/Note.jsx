import React from "react";
import PropTypes from "prop-types";

import { Card, Layout, Row, Col, Button } from "antd";

import DateFormat from "../../utils/DateFormat";

function Note(props) {
    return (
        <Layout>
            <Card style={props.cardStyle}>
                <>
                    <Row>
                        <Col
                            style={{
                                marginBottom: "4px",
                                color: "rgba(0, 0, 0, 0.85)",
                                fontWeight: "500",
                                fontSize: "16px",
                            }}
                        >
                            {props.title.length < 20
                                ? props.title
                                : props.title.substring(0, 20).concat("...")}
                        </Col>
                    </Row>
                    <Row>
                        <Col>{props.description.substring(0, 50).concat("...")}</Col>
                    </Row>
                    <Row
                        style={{
                            marginTop: "4px",
                            color: "rgba(0, 0, 0, 0.45)",
                        }}
                    >
                        {DateFormat(props.dateCreation)}
                    </Row>
                </>
            </Card>
        </Layout>
    );
}

Note.propTypes = {
    cardStyle: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    dateCreation: PropTypes.instanceOf(Date),
};

export default Note;
