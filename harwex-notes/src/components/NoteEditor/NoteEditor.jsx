import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Typography } from "antd";

import Styles from "./styled";

const { Title, Text, Paragraph } = Typography;

const NoteEditor = (props) => {
    const [editableTitle, setEditableTitle] = useState(null);
    const [editableContent, setEditableContent] = useState(null);

    useEffect(() => {
        setEditableTitle(props.note?.title ?? null);
        setEditableContent(props.note?.description ?? null);
    }, [props.note?.title, props.note?.description]);

    useEffect(() => {
        const newNote = { ...props.note, ...{ title: editableTitle, description: editableContent } };
        if (props.note) {
            props.onNoteChanged(newNote);
        }
    }, [editableTitle, editableContent]);

    let info;
    if (!props.note) {
        info = "Select note to display...";
    } else {
        info = (
            <Typography>
                <Title
                    editable={{
                        onChange: setEditableTitle,
                    }}
                >
                    {editableTitle}
                </Title>

                <Paragraph
                    editable={{
                        onChange: setEditableContent,
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
    onNoteChanged: PropTypes.func,
};

export default NoteEditor;
