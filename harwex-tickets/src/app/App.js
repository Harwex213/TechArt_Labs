import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "antd";

import AuthorizationPage from "../pages/Authorization/AuthorizationPage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import AppNavbar from "../components/AppNavbar/AppNavbar";
import AppHeader from "../components/AppHeader/AppHeader";

import { RoutePaths } from "../config/constants/RoutePaths";
import styles from "./styles";

function App() {
    return (
        <Router>
            <Layout style={styles.layout}>
                <Layout.Sider style={styles.sider}>
                    <AppNavbar />
                </Layout.Sider>
                <Layout>
                    <Layout.Header style={styles.header}>
                        <AppHeader />
                    </Layout.Header>
                    <Layout.Content style={styles.contentWrapper}>
                        <div style={styles.content}>
                            <Switch>
                                <Route path={RoutePaths.auth}>
                                    <AuthorizationPage />
                                </Route>
                                <Route path={RoutePaths.reg}>
                                    <RegistrationPage />
                                </Route>

                                <Route path={RoutePaths.movies}>{/*<MyNotesPage />*/}</Route>
                                <Route path={RoutePaths.about}>{/*<AboutPage />*/}</Route>
                                <Route path={RoutePaths.notFound}>{/*<NotFoundPage />*/}</Route>
                                <Route exact path={RoutePaths.empty}>
                                    <Redirect to={RoutePaths.about} />
                                </Route>
                                <Route path={RoutePaths.any}>
                                    <Redirect to={RoutePaths.notFound} />
                                </Route>
                            </Switch>
                        </div>
                    </Layout.Content>
                </Layout>
            </Layout>
        </Router>
    );
}

export default App;
