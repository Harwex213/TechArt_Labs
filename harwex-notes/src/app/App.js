import React, { useState } from "react";
import { Button, Layout } from "antd";

import Navbar from "../components/Navbar/Navbar";

import MyNotesPage from "../pages/myNotes/myNotesPage";

import Styles from "./styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;

const App = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [pageLeftMargin, setPageLeftMargin] = useState(Styles.app__page_marginLeftSmall);

    const handleNavbarExpanderClick = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
        setPageLeftMargin(
            !isNavbarCollapsed ? Styles.app__page_marginLeftSmall : Styles.app__page_marginLeftLarge
        );
    };

    const appPageStyle = { ...Styles.app__page, ...pageLeftMargin };

    return (
        <Layout style={Styles.app}>
            <Header style={Styles.app__header}>
                <h1>Harwex Notes</h1>
            </Header>
            <Layout style={Styles.app__content}>
                <Sider
                    style={Styles.app__navbar}
                    theme="light"
                    collapsed={isNavbarCollapsed}
                    collapsedWidth={50}
                >
                    <Button
                        shape="circle"
                        icon={isNavbarCollapsed ? <RightOutlined /> : <LeftOutlined />}
                        style={Styles.navbar_expander}
                        onClick={handleNavbarExpanderClick}
                    />
                    <Navbar style={Styles.navbar__content} />
                </Sider>
                <MyNotesPage style={appPageStyle} />
            </Layout>
        </Layout>
    );
};

export default App;
