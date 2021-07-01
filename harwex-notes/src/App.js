import React from "react";
import { Layout } from "antd";

import "./App.css";

import MyNotes from "./pages/myNotes/myNotes";

import Navbar from "./components/Navbar/Navbar";

const { Header } = Layout;

function App() {
    return (
        <Layout className="app">
            <Header className="app__header">Header</Header>
            <Layout>
                <Navbar className="app__navbar" />
                <MyNotes className="app__page" />
            </Layout>
        </Layout>
    );
}

export default App;
