import React from "react";
import { Switch, Route, Redirect, Link, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";
import { FileOutlined, InfoCircleOutlined, ShareAltOutlined } from "@ant-design/icons";

import MyNotesPage from "../pages/myNotes/myNotesPage";
import SharedNotesPage from "../pages/sharedNotes/sharedNotesPage";
import AboutPage from "../pages/about/aboutPage";
import NotFoundPage from "../pages/notFound/notFoundPage";

import { menuLinks } from "../config/constants/menu";
import Styles from "./styled";

const { Header, Content } = Layout;

const App = () => {
    let location = useLocation();
    let selectedKey = menuLinks.get(location.pathname);

    return (
        <Layout style={Styles.app}>
            <Header style={Styles.app__header}>
                <h1 style={Styles.header__title}>Harwex Notes</h1>
                <Menu
                    style={Styles.header__menu}
                    mode="horizontal"
                    theme="light"
                    selectedKeys={[selectedKey]}
                >
                    <Menu.Item key={0} icon={<FileOutlined />}>
                        <Link to="/notes">My Notes</Link>
                    </Menu.Item>
                    <Menu.Item key={1} icon={<ShareAltOutlined />}>
                        <Link to="/shared-notes">Shared Notes</Link>
                    </Menu.Item>
                    <Menu.Item key={2} icon={<InfoCircleOutlined />}>
                        <Link to="/about">About</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={Styles.app__content}>
                <Switch>
                    <Route path="/notes">
                        <MyNotesPage />
                    </Route>
                    <Route path="/shared-notes">
                        <SharedNotesPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/not-found">
                        <NotFoundPage />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/about" />
                    </Route>
                    <Route path="*">
                        <Redirect to="/not-found" />
                    </Route>
                </Switch>
            </Content>
        </Layout>
    );
};

export default App;
