import React, { useEffect, useState } from "react";

import { Drawer, Layout } from "antd";

import NoteEditor from "../../components/NoteEditor/NoteEditor";
import NotesList from "../../components/NotesList/NotesList";

import { useWindowWidth } from "../../utils/useWindowWidth";
import Styles from "./Styles";

const MyNotesPage = () => {
    const windowWidth = useWindowWidth();

    const [notes, setNotes] = useState([]);
    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("notes")) ?? []);
    }, []);

    const [chosenNoteId, setChosenNoteId] = useState(null);
    const handleNoteChoose = (noteId) => {
        setChosenNoteId(noteId);
        setIsMyNotesPageDrawerVisible(true);
    };
    const handleNoteChange = (newNote) => {
        const noteIndex = notes.findIndex((note) => note.id === newNote.id);
        const notesCopy = [...notes];
        notesCopy[noteIndex] = newNote;

        setNotes(notesCopy);
        localStorage.setItem("notes", JSON.stringify(notesCopy));
    };

    const [isMyNotesPageDrawerVisible, setIsMyNotesPageDrawerVisible] = useState(false);
    const handleDrawerClose = () => {
        setIsMyNotesPageDrawerVisible(false);
    };

    return (
        <Layout style={Styles.layout}>
            <Layout.Content style={Styles.noteList}>
                <NotesList rowStyle={Styles.noteListRow} notes={notes} onNoteChoose={handleNoteChoose} />
            </Layout.Content>
            <Drawer
                width={windowWidth * 0.75}
                visible={isMyNotesPageDrawerVisible}
                onClose={handleDrawerClose}
            >
                <NoteEditor note={notes[chosenNoteId]} onNoteChange={handleNoteChange} />
            </Drawer>
        </Layout>
    );
};

export default MyNotesPage;
