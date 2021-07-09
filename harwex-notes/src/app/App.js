import React from "react";
import { Switch, Route, Redirect, Link, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";
import { FileOutlined, InfoCircleOutlined, ShareAltOutlined } from "@ant-design/icons";

import MyNotesPage from "../pages/myNotes/myNotesPage";
import SharedNotesPage from "../pages/sharedNotes/sharedNotesPage";
import AboutPage from "../pages/about/aboutPage";
import NotFoundPage from "../pages/notFound/notFoundPage";

import Styles from "./styled";

const { Header, Content } = Layout;

const menuLinks = new Map([
    ["/notes", "0"],
    ["/shared-notes", "1"],
    ["/about", "2"],
    ["/not-found", "3"],
]);
const menuLinkPaths = [...menuLinks.keys()];

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
                        <Link to={menuLinkPaths[0]}>My Notes</Link>
                    </Menu.Item>
                    <Menu.Item key={1} icon={<ShareAltOutlined />}>
                        <Link to={menuLinkPaths[1]}>Shared Notes</Link>
                    </Menu.Item>
                    <Menu.Item key={2} icon={<InfoCircleOutlined />}>
                        <Link to={menuLinkPaths[2]}>About</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={Styles.app__content}>
                <Switch>
                    <Route path={menuLinkPaths[0]}>
                        <MyNotesPage />
                    </Route>
                    <Route path={menuLinkPaths[1]}>
                        <SharedNotesPage />
                    </Route>
                    <Route path={menuLinkPaths[2]}>
                        <AboutPage />
                    </Route>
                    <Route path={menuLinkPaths[3]}>
                        <NotFoundPage />
                    </Route>
                    <Route path="*">
                        <Redirect to={menuLinkPaths[3]} />
                    </Route>
                </Switch>
            </Content>
        </Layout>
    );
};

export default App;
