import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Layout, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import Note from "../../components/Note/Note";
import NoteInfo from "../../components/NoteInfo/NoteInfo";

import "./myNotes.css";

import notesExample from "./notes";

const { Content, Sider } = Layout;

function MyNotes(props) {
    const listJsxNotes = notesExample.map((note) => (
        <Col span={6} key={note.id}>
            <Note
                className="myNotes__note"
                title={note.title}
                description={note.description}
                dateCreation={note.dateCreation}
            />
        </Col>
    ));

    return (
        <Layout className="myNotes">
            <Content className="myNotes__noteList">
                <>
                    <Row
                        gutter={[20, 20]}
                        justify="start"
                        style={{
                            padding: "20px",
                        }}
                    >
                        {listJsxNotes}
                    </Row>
                </>
            </Content>
            <Sider className="myNotes__noteInfo" theme="light" collapsedWidth={0}>
                <Button
                    shape="circle"
                    icon={<LeftOutlined />}
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "calc(50% - 32px)",
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
