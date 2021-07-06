import React from "react";
import { Layout, Menu } from "antd";

import MyNotesPage from "../pages/myNotes/myNotesPage";

import Styles from "./styled";
import { FileOutlined, InfoCircleOutlined, ShareAltOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const App = () => {
    return (
        <Layout style={Styles.app}>
            <Header style={Styles.app__header}>
                <h1 style={Styles.header__title}>Harwex Notes</h1>
                <Menu style={Styles.header__menu} mode="horizontal" theme="light" defaultSelectedKeys={["0"]}>
                    <Menu.Item key={0} icon={<FileOutlined />}>
                        My Notes
                    </Menu.Item>
                    <Menu.Item key={1} icon={<ShareAltOutlined />}>
                        Shared Notes
                    </Menu.Item>
                    <Menu.Item key={2} icon={<InfoCircleOutlined />}>
                        About
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={Styles.app__content}>
                <MyNotesPage />
            </Content>
        </Layout>
    );
};

export default App;
