import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "antd";

import Header from "../components/Header/Header";

import MyNotesPage from "../pages/myNotes/MyNotesPage";
import SharedNotesPage from "../pages/sharedNotes/SharedNotesPage";
import AboutPage from "../pages/about/AboutPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

import store from "./store";
import { InitMyNotesPageDev } from "../dev/notesConfig";
import Styles from "./Styles";
import UserActionsDrawers from "../components/UserActionsDrawers/UserActionsDrawers";

const App = () => {
    useEffect(() => {
        InitMyNotesPageDev();
    }, []);
    // Todo: set route paths to constants

    return (
        <Router>
            <Provider store={store}>
                <Layout style={Styles.layout}>
                    <Layout.Header style={Styles.header}>
                        <Header />
                    </Layout.Header>
                    <Layout.Content style={Styles.content}>
                        <UserActionsDrawers />

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
            </Provider>
        </Router>
    );
};

export default App;
