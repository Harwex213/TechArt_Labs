import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, Link, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";
import { FileOutlined, InfoCircleOutlined, ShareAltOutlined } from "@ant-design/icons";

import MyNotesPage from "../pages/myNotes/MyNotesPage";
import SharedNotesPage from "../pages/sharedNotes/SharedNotesPage";
import AboutPage from "../pages/about/AboutPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

import { devCheckMyNotes } from "../dev/notesConfig";
import { menuLinks } from "../config/constants/menu";
import Styles from "./Styles";

const App = () => {
    useEffect(() => {
        devCheckMyNotes();
    }, []);

    let location = useLocation();
    let selectedKey = menuLinks.get(location.pathname);

    return (
        <Router>
            <Layout style={Styles.app}>
                <Layout.Header style={Styles.appHeader}>
                    <h1 style={Styles.headerTitle}>Harwex Notes</h1>
                    <Menu
                        style={Styles.headerMenu}
                        mode="horizontal"
                        theme="light"
                        defaultSelectedKeys={[selectedKey]}
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
                </Layout.Header>
                <Layout.Content style={Styles.appContent}>
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
                </Layout.Content>
            </Layout>
        </Router>
    );
};

export default App;
