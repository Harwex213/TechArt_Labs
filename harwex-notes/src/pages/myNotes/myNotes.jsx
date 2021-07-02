import React from "react";
import PropTypes from "prop-types";

import { Button, Layout } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import NoteInfo from "../../components/NoteInfo/NoteInfo";
import NoteList from "../../components/NoteList/NoteList";

import "./myNotes.css";

const { Content, Sider } = Layout;

function MyNotes(props) {
    return (
        <Layout className={props.className.concat(" myNotes")}>
            <Content className="myNotes__noteList">
                <NoteList
                    rowStyle={{
                        padding: "20px",
                    }}
                />
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
