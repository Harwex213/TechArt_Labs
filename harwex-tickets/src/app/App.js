import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "antd";

import { RoutePaths } from "../config/constants/RoutePaths";

function App() {
    return (
        <Router>
            <Layout>
                <Layout.Header>{/*<Header />*/}</Layout.Header>
                <Layout.Content>
                    <Switch>
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
                </Layout.Content>
            </Layout>
        </Router>
    );
}

export default App;
