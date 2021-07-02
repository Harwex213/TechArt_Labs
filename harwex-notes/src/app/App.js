import React, { useState } from "react";
import { Layout } from "antd";

import Navbar from "../components/Navbar/Navbar";
import ExpandButton from "../components/ExpandButton/ExpandButton";

import MyNotesPage from "../pages/myNotes/myNotesPage";

import "./App.css";

const { Header, Sider } = Layout;

function App() {
    const [isSiderCollapsed, setIsSiderCollapsed] = useState(true);

    const appPageClassName = "app__page " + (isSiderCollapsed ? "app__page_small" : "app__page_large");

    return (
        <Layout className="app">
            <Header tit className="app__header">
                <h1>Harwex Notes</h1>
            </Header>
            <Layout className="app__content">
                <Sider className="app__navbar" theme="light" collapsed={isSiderCollapsed} collapsedWidth={50}>
                    <ExpandButton
                        direction={isSiderCollapsed ? "right" : "left"}
                        toRight
                        onClick={() => setIsSiderCollapsed(!isSiderCollapsed)}
                    />
                    <Navbar
                        style={{
                            borderRight: "none",
                        }}
                    />
                </Sider>
                <MyNotesPage className={appPageClassName} />
            </Layout>
        </Layout>
    );
}

export default App;
