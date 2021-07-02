import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Layout, Row } from "antd";

import Note from "../../components/Note/Note";
import NoteInfo from "../../components/NoteInfo/NoteInfo";

import "./myNotes.css";

import notesExample from "./notes";
import { LeftOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

function MyNotes(props) {
    const listJsxNotes = notesExample.map((note) => (
        <Col
            xxl={{ span: 6 }}
            xl={{ span: 8 }}
            md={{ span: 12 }}
            xs={{ span: 24 }}
            key={note.id}
        >
            <Note
                className="noteList__note"
                title={note.title}
                description={note.description}
                dateCreation={note.dateCreation}
            />
        </Col>
    ));
    return (
        <Layout>
            <Content className={props.className}>
                <>
                    <Row gutter={[20, 20]} justify="start">
                        {listJsxNotes}
                    </Row>
                </>
            </Content>
            <Sider
                className="noteList__noteInfo"
                theme="light"
                collapsedWidth={0}
            >
                <Button
                    shape="circle"
                    icon={<LeftOutlined />}
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "50%",
                        left: "-16px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                />
                <NoteInfo />
            </Sider>
        </Layout>
    );
}

MyNotes.propTypes = {
    className: PropTypes.string,
};

export default MyNotes;
