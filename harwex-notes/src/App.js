import React from "react";
import { Button, Layout } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import Navbar from "./components/Navbar/Navbar";

import MyNotes from "./pages/myNotes/myNotes";

import "./App.css";

const { Header, Sider } = Layout;

function App() {
    return (
        <Layout className="app">
            <Header tit className="app__header">
                <h1>Harwex Notes</h1>
            </Header>
            <Layout className="app__content">
                <Sider className="app__navbar" theme="light" collapsed collapsedWidth={50}>
                    <Button
                        shape="circle"
                        icon={<RightOutlined />}
                        style={{
                            display: "flex",
                            zIndex: "2",
                            position: "absolute",
                            top: "calc(50% - 32px)",
                            right: "-16px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
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
