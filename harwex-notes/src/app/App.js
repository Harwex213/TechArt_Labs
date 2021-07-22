import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "antd";

import Header from "../components/Header/Header";

import MyNotesPage from "../pages/myNotes/MyNotesPage";
import SharedNotesPage from "../pages/sharedNotes/SharedNotesPage";
import AboutPage from "../pages/about/AboutPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

import { InitMyNotesPageDev } from "../dev/notesConfig";
import Styles from "./Styles";
import PrivateRoute from "../route/PrivateRoute";

const App = () => {
    useEffect(() => {
        InitMyNotesPageDev();
    }, []);
    // Todo: set route paths to constants

    return (
        <Router>
            <Layout style={Styles.layout}>
                <Layout.Header style={Styles.header}>
                    <Header />
                </Layout.Header>
                <Layout.Content style={Styles.content}>
                    <Switch>
                        <PrivateRoute path="/notes">
                            <MyNotesPage />
                        </PrivateRoute>
                        <PrivateRoute path="/shared-notes">
                            <SharedNotesPage />
                        </PrivateRoute>
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
