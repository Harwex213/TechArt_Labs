import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Layout } from "antd";

import Header from "../components/Header/Header";
import PrivateRoute from "../route/PrivateRoute";

import MyNotesPage from "../pages/myNotes/MyNotesPage";
import SharedNotesPage from "../pages/sharedNotes/SharedNotesPage";
import AboutPage from "../pages/about/AboutPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

import { InitMyNotesPageDev } from "../dev/notesConfig";
import { RoutePaths } from "../config/constants/routePaths";
import Styles from "./Styles";
import { selectUserName } from "../slices/userSlice";
import { fetchUserProfile } from "../slices/profileSlice";

const App = () => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);

    useEffect(() => {
        InitMyNotesPageDev();
    }, []);

    useEffect(() => {
        if (username !== "guest") {
            dispatch(fetchUserProfile({ username }));
        }
    }, [dispatch, username]);

    return (
        <Router>
            <Layout style={Styles.layout}>
                <Layout.Header style={Styles.header}>
                    <Header />
                </Layout.Header>
                <Layout.Content style={Styles.content}>
                    <Switch>
                        <PrivateRoute path={RoutePaths.notes}>
                            <MyNotesPage />
                        </PrivateRoute>
                        <PrivateRoute path={RoutePaths.sharedNotes}>
                            <SharedNotesPage />
                        </PrivateRoute>
                        <Route path={RoutePaths.about}>
                            <AboutPage />
                        </Route>
                        <Route path={RoutePaths.notFound}>
                            <NotFoundPage />
                        </Route>
                        <Route exact path={RoutePaths.empty}>
                            <Redirect to="/about" />
                        </Route>
                        <Route path={RoutePaths.any}>
                            <Redirect to="/not-found" />
                        </Route>
                    </Switch>
                </Layout.Content>
            </Layout>
        </Router>
    );
};

export default App;
