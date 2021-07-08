import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";

import App from "./app/App";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
