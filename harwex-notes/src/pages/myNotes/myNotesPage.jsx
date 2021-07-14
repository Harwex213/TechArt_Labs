import React, { useEffect, useState } from "react";

import { Button, Layout } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import NoteEditor from "../../components/NoteEditor/NoteEditor";
import NotesList from "../../components/NotesList/NotesList";

import Styles from "./Styles";

const { Content, Sider } = Layout;

const MyNotesPage = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("notes")) ?? []);
    }, []);

    const [chosenNoteId, setChosenNoteId] = useState(null);
    const handleNoteChoose = (noteId) => {
        setChosenNoteId(noteId);
    };
    const handleNoteChange = (newNote) => {
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
        <Layout style={Styles.layout}>
            <Content
                style={{
                    ...Styles.noteList,
                    marginRight: isMyNotesPageSiderCollapsed ? "20px" : "500px",
                }}
            >
                <NotesList rowStyle={Styles.noteListRow} notes={notes} onNoteChoose={handleNoteChoose} />
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
                    style={Styles.siderExpander}
                    shape="circle"
                    icon={isMyNotesPageSiderCollapsed ? <LeftOutlined /> : <RightOutlined />}
                    onClick={handleSiderExpanderClick}
                />
                <NoteEditor note={notes[chosenNoteId]} onNoteChange={handleNoteChange} />
            </Sider>
        </Layout>
    );
};

export default MyNotesPage;
