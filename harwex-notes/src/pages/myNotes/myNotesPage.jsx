import React, { useState } from "react";
import PropTypes from "prop-types";

import { Layout } from "antd";

import NoteInfo from "../../components/NoteInfo/NoteInfo";
import NoteList from "../../components/NoteList/NoteList";

import "./myNotes.css";
import ExpandButton from "../../components/ExpandButton/ExpandButton";

const { Content, Sider } = Layout;

function MyNotesPage(props) {
    const [isSiderCollapsed, setIsSiderCollapsed] = useState(true);

    const noteListClassName =
        "myNotes__noteList " + (isSiderCollapsed ? "myNotes__noteList_small" : "myNotes__noteList_large");

    return (
        <Layout className={props.className.concat(" myNotes")}>
            <Content className={noteListClassName}>
                <NoteList
                    rowStyle={{
                        padding: "20px",
                    }}
                />
            </Content>
            <Sider
                className="myNotes__noteInfo"
                theme="light"
                width={350}
                collapsed={isSiderCollapsed}
                collapsedWidth={0}
            >
                <ExpandButton
                    direction={isSiderCollapsed ? "left" : "right"}
                    toLeft
                    onClick={() => setIsSiderCollapsed(!isSiderCollapsed)}
                />
                <NoteInfo />
            </Sider>
        </Layout>
    );
}

MyNotesPage.propTypes = {
    className: PropTypes.string,
};

export default MyNotesPage;
