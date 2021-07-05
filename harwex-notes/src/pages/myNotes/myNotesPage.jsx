import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Layout } from "antd";

import NoteAdditionalInfo from "../../components/NoteAdditionalInfo/NoteAdditionalInfo";
import NoteList from "../../components/NoteList/NoteList";

import Styles from "./styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

function MyNotesPage(props) {
    const [isMyNotesPageSiderCollapsed, setIsMyNotesPageSiderCollapsed] = useState(true);
    const [chosenNote, setChosenNote] = useState(null);
    const [noteListRightMargin, setNoteListRightMargin] = useState(Styles.myNotes__noteList_rightMarginSmall);

    const handleNoteClick = (note) => {
        setChosenNote(note);
    };

    const handleSiderExpanderClick = () => {
        setIsMyNotesPageSiderCollapsed(!isMyNotesPageSiderCollapsed);
        setNoteListRightMargin(
            !isMyNotesPageSiderCollapsed
                ? Styles.myNotes__noteList_rightMarginSmall
                : Styles.myNotes__noteList_rightMarginLarge
        );
    };

    const myNotesStyle = { ...Styles.myNotes, ...props.style };
    const noteListStyle = { ...Styles.myNotes__noteList, ...noteListRightMargin };
    const siderStyle = {
        ...Styles.myNotes__sider,
        paddingRight: isMyNotesPageSiderCollapsed ? "0" : "10px",
    };

    return (
        <Layout style={myNotesStyle}>
            <Content style={noteListStyle}>
                <NoteList rowStyle={Styles.noteList__row} onNoteChoose={handleNoteClick} />
            </Content>
            <Sider
                style={siderStyle}
                theme="light"
                width={350}
                collapsed={isMyNotesPageSiderCollapsed}
                collapsedWidth={0}
            >
                <Button
                    style={Styles.sider__expander}
                    shape="circle"
                    icon={isMyNotesPageSiderCollapsed ? <LeftOutlined /> : <RightOutlined />}
                    onClick={handleSiderExpanderClick}
                />
                <NoteAdditionalInfo note={chosenNote} />
            </Sider>
        </Layout>
    );
}

MyNotesPage.propTypes = {
    style: PropTypes.object,
};

export default MyNotesPage;
