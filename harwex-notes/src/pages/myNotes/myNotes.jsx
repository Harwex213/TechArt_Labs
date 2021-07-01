import React from "react";
import PropTypes from "prop-types";

import { Col, Layout, Row } from "antd";

import "./myNotes.css";
import Note from "../../components/Note/Note";
import NoteInfo from "../../components/NoteInfo/NoteInfo";

const { Content } = Layout;

const notes = [
    {
        id: 0,
        title: "About me",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ex ligula, sed molestie urna ultrices id." +
            " Vivamus vel varius augue. Nullam gravida est imperdiet lobortis laoreet. Cras quis sem eu libero fringilla malesuada" +
            " at eget dui. Ut volutpat odio eu felis lobortis, non molestie tellus gravida. Integer malesuada consectetur augue," +
            " malesuada vestibulum nisi posuere a. Ut elit turpis, ornare et pharetra placerat, molestie sed arcu. In sapien lectus," +
            " venenatis ut leo at, vestibulum facilisis nibh",
        dateCreation: new Date(2010, 10, 10),
    },
    {
        id: 1,
        title: "About my dog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ex ligula, sed molestie urna ultrices id." +
            " Vivamus vel varius augue. Nullam gravida est imperdiet lobortis laoreet. Cras quis sem eu libero fringilla malesuada" +
            " at eget dui. Ut volutpat odio eu felis lobortis, non molestie tellus gravida. Integer malesuada consectetur augue," +
            " malesuada vestibulum nisi posuere a. Ut elit turpis, ornare et pharetra placerat, molestie sed arcu. In sapien lectus," +
            " venenatis ut leo at, vestibulum facilisis nibh",
        dateCreation: new Date(2012, 12, 27),
    },
    {
        id: 2,
        title: "About my cat",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ex ligula, sed molestie urna ultrices id." +
            " Vivamus vel varius augue. Nullam gravida est imperdiet lobortis laoreet. Cras quis sem eu libero fringilla malesuada" +
            " at eget dui. Ut volutpat odio eu felis lobortis, non molestie tellus gravida. Integer malesuada consectetur augue," +
            " malesuada vestibulum nisi posuere a. Ut elit turpis, ornare et pharetra placerat, molestie sed arcu. In sapien lectus," +
            " venenatis ut leo at, vestibulum facilisis nibh",
        dateCreation: new Date(2020, 5, 2),
    },
    {
        id: 3,
        title: "About iTechArt",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ex ligula, sed molestie urna ultrices id." +
            " Vivamus vel varius augue. Nullam gravida est imperdiet lobortis laoreet. Cras quis sem eu libero fringilla malesuada" +
            " at eget dui. Ut volutpat odio eu felis lobortis, non molestie tellus gravida. Integer malesuada consectetur augue," +
            " malesuada vestibulum nisi posuere a. Ut elit turpis, ornare et pharetra placerat, molestie sed arcu. In sapien lectus," +
            " venenatis ut leo at, vestibulum facilisis nibh",
        dateCreation: new Date(2017, 2, 11),
    },
    {
        id: 4,
        title: "About iTechArt",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ex ligula, sed molestie urna ultrices id." +
            " Vivamus vel varius augue. Nullam gravida est imperdiet lobortis laoreet. Cras quis sem eu libero fringilla malesuada" +
            " at eget dui. Ut volutpat odio eu felis lobortis, non molestie tellus gravida. Integer malesuada consectetur augue," +
            " malesuada vestibulum nisi posuere a. Ut elit turpis, ornare et pharetra placerat, molestie sed arcu. In sapien lectus," +
            " venenatis ut leo at, vestibulum facilisis nibh",
        dateCreation: new Date(2017, 2, 11),
    },
    {
        id: 5,
        title: "About iTechArt",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ex ligula, sed molestie urna ultrices id." +
            " Vivamus vel varius augue. Nullam gravida est imperdiet lobortis laoreet. Cras quis sem eu libero fringilla malesuada" +
            " at eget dui. Ut volutpat odio eu felis lobortis, non molestie tellus gravida. Integer malesuada consectetur augue," +
            " malesuada vestibulum nisi posuere a. Ut elit turpis, ornare et pharetra placerat, molestie sed arcu. In sapien lectus," +
            " venenatis ut leo at, vestibulum facilisis nibh",
        dateCreation: new Date(2017, 2, 11),
    },
    {
        id: 6,
        title: "About iTechArt fasdfasdfasdf sadfasdfas dfasd fasdfas",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus ex ligula, sed molestie urna ultrices id." +
            " Vivamus vel varius augue. Nullam gravida est imperdiet lobortis laoreet. Cras quis sem eu libero fringilla malesuada" +
            " at eget dui. Ut volutpat odio eu felis lobortis, non molestie tellus gravida. Integer malesuada consectetur augue," +
            " malesuada vestibulum nisi posuere a. Ut elit turpis, ornare et pharetra placerat, molestie sed arcu. In sapien lectus," +
            " venenatis ut leo at, vestibulum facilisis nibh",
        dateCreation: new Date(2017, 2, 11),
    },
];

function MyNotes(props) {
    const listJsxNotes = notes.map((note) => (
        <Col
            xxl={{ span: 6 }}
            xl={{ span: 8 }}
            md={{ span: 12 }}
            xs={{ span: 24 }}
            key={note.id}
        >
            <Note
                className="noteList__note"
                title={note.title}
                description={note.description}
                dateCreation={note.dateCreation}
            />
        </Col>
    ));
    return (
        <Layout>
            <Content className={props.className}>
                <>
                    <Row gutter={[20, 20]} justify="start">
                        {listJsxNotes}
                    </Row>
                </>
            </Content>
            <NoteInfo className="noteList__noteInfo" />
        </Layout>
    );
}

MyNotes.propTypes = {
    className: PropTypes.string,
};

export default MyNotes;
