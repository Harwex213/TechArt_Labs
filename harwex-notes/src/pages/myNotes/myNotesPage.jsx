import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Layout } from "antd";

import NoteEditor from "../../components/NoteEditor/NoteEditor";
import NotesList from "../../components/NotesList/NotesList";

import Styles from "./styled";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

const MyNotesPage = (props) => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes") ?? []));

    const [chosenNote, setChosenNote] = useState(null);
    const handleNoteChoose = (note) => {
        setChosenNote(note);
    };
    const handleNoteChanged = (newNote) => {
        const noteIndex = notes.findIndex((note) => note.id === newNote.id);
        const notesCopy = [...notes];
        notesCopy[noteIndex] = newNote;

        setNotes(notesCopy);
        localStorage.setItem("notes", JSON.stringify(notesCopy));
    };

    const [isMyNotesPageSiderCollapsed, setIsMyNotesPageSiderCollapsed] = useState(false);
    const handleSiderExpanderClick = () => {
        setIsMyNotesPageSiderCollapsed(!isMyNotesPageSiderCollapsed);
    };

    // Todo: remove "magic" styles
    const noteListStyle = {
        ...Styles.myNotes__noteList,
        marginRight: isMyNotesPageSiderCollapsed ? "20px" : "500px",
    };
    const siderStyle = {
        ...Styles.myNotes__sider,
        paddingRight: isMyNotesPageSiderCollapsed ? "0" : "10px",
    };

    return (
        <Layout style={Styles.myNotes}>
            <Content style={noteListStyle}>
                <NotesList rowStyle={Styles.noteList__row} notes={notes} onNoteChoose={handleNoteChoose} />
            </Content>
            <Sider
                style={siderStyle}
                theme="light"
                width={500}
                collapsed={isMyNotesPageSiderCollapsed}
                collapsedWidth={0}
            >
                <Button
                    style={Styles.sider__expander}
                    shape="circle"
                    icon={isMyNotesPageSiderCollapsed ? <LeftOutlined /> : <RightOutlined />}
                    onClick={handleSiderExpanderClick}
                />
                <NoteEditor note={chosenNote} onNoteChanged={handleNoteChanged} />
            </Sider>
        </Layout>
    );
};

MyNotesPage.propTypes = {};

export default MyNotesPage;
