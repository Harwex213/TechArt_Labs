import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button, Layout } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import NoteEditor from "../../components/NoteEditor/NoteEditor";
import NotesList from "../../components/NotesList/NotesList";

import Styles from "./styled";
import notesExample from "../../config/constants/notes";

const { Content, Sider } = Layout;

const MyNotesPage = (props) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("notes")) {
            localStorage.setItem("notes", JSON.stringify(notesExample));
        }
    });

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("notes")) ?? []);
    }, []);

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

    return (
        <Layout style={Styles.myNotes}>
            <Content
                style={{
                    ...Styles.noteList,
                    marginRight: isMyNotesPageSiderCollapsed ? "20px" : "500px",
                }}
            >
                <NotesList rowStyle={Styles.noteList__row} notes={notes} onNoteChoose={handleNoteChoose} />
            </Content>
            <Sider
                style={{
                    ...Styles.sider,
                    paddingRight: isMyNotesPageSiderCollapsed ? "0" : "10px",
                }}
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
