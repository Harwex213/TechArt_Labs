import React from "react";
import PropTypes from "prop-types";

import { Card, Layout, Row, Col } from "antd";

import DateFormat from "../../utils/DateFormat";

function Note(props) {
    return (
        <Layout className={props.className}>
            <Card>
                <>
                    <Row>
                        <Col sm={{ span: 20 }} xs={{ span: 19 }}>
                            <Card.Meta
                                title={
                                    props.title.length < 20
                                        ? props.title
                                        : props.title.substring(0, 20).concat("...")
                                }
                                description={props.description.substring(0, 50).concat("...")}
                            />
                        </Col>
                        <Col sm={{ span: 4 }} xs={{ span: 5 }}>
                            {DateFormat(props.dateCreation)}
                        </Col>
                    </Row>
                </>
            </Card>
        </Layout>
    );
}

Note.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    dateCreation: PropTypes.instanceOf(Date),
};

export default Note;
