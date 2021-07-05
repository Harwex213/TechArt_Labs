import React, { useState } from "react";
import { Button, Layout } from "antd";

import Navbar from "../components/Navbar/Navbar";

import MyNotesPage from "../pages/myNotes/myNotesPage";

import AppStyle from "./styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;

const App = () => {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
    const [pageLeftMargin, setPageLeftMargin] = useState(AppStyle.app__page_marginLeftSmall);

    const handleNavbarExpanderButtonClick = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
        setPageLeftMargin(
            !isNavbarCollapsed ? AppStyle.app__page_marginLeftSmall : AppStyle.app__page_marginLeftLarge
        );
    };

    const appPageStyle = Object.assign({}, AppStyle.app__page, pageLeftMargin);

    return (
        <Layout style={AppStyle.app}>
            <Header style={AppStyle.app__header}>
                <h1>Harwex Notes</h1>
            </Header>
            <Layout style={AppStyle.app__content}>
                <Sider
                    style={AppStyle.app__navbar}
                    theme="light"
                    collapsed={isNavbarCollapsed}
                    collapsedWidth={50}
                >
                    <Button
                        shape="circle"
                        icon={isNavbarCollapsed ? <RightOutlined /> : <LeftOutlined />}
                        style={AppStyle.navbar_expanderButton}
                        onClick={handleNavbarExpanderButtonClick}
                    />
                    <Navbar style={AppStyle.navbar__content} />
                </Sider>
                <MyNotesPage style={appPageStyle} />
            </Layout>
        </Layout>
    );
};

export default App;
