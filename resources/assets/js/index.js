import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/App";

import Store from "./store/store";

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
