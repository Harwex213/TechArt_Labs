import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Typography } from "antd";

import Styles from "./Styles";

const { Title, Text, Paragraph } = Typography;

const NoteEditor = (props) => {
    const [editableTitle, setEditableTitle] = useState(null);
    const [editableContent, setEditableContent] = useState(null);

    useEffect(() => {
        setEditableTitle(props.note?.title ?? null);
        setEditableContent(props.note?.description ?? null);
    }, [props.note?.title, props.note?.description]);

    const handleTitleChange = (newTitle) => {
        setEditableTitle(newTitle);
        const newNote = { ...props.note, ...{ title: newTitle } };
        props.onNoteChange(newNote);
    };

    const handleContentChange = (newContent) => {
        setEditableContent(newContent);
        const newNote = { ...props.note, ...{ description: newContent } };
        props.onNoteChange(newNote);
    };

    let info;
    if (!props.note) {
        info = "Select note to display...";
    } else {
        info = (
            <Typography>
                <Title
                    editable={{
                        onChange: handleTitleChange,
                    }}
                >
                    {editableTitle}
                </Title>

                <Paragraph
                    editable={{
                        onChange: handleContentChange,
                    }}
                >
                    {editableContent}
                </Paragraph>
                <Text style={Styles.dateCreation}>{props.note.dateCreation.substring(0, 10)}</Text>
            </Typography>
        );
    }
    return <div>{info}</div>;
};

NoteEditor.propTypes = {
    note: PropTypes.object,
    onNoteChange: PropTypes.func,
};

export default NoteEditor;
