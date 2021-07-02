import React from "react";
import { Layout } from "antd";

import Navbar from "./components/Navbar/Navbar";

import MyNotes from "./pages/myNotes/myNotes";

import "./App.css";
import ExpandButton from "./components/ExpandButton/ExpandButton";

const { Header, Sider } = Layout;

function App() {
    return (
        <Layout className="app">
            <Header tit className="app__header">
                <h1>Harwex Notes</h1>
            </Header>
            <Layout className="app__content">
                <Sider className="app__navbar" theme="light" collapsed collapsedWidth={50}>
                    <ExpandButton direction="right" toRight />
                    <Navbar
                        style={{
                            borderRight: "none",
                        }}
                    />
                </Sider>
                <MyNotes className="app__page" />
            </Layout>
        </Layout>
    );
}

export default App;
