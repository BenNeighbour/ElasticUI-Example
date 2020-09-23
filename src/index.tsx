import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "@elastic/eui/dist/eui_theme_light.css";
import '@elastic/charts/dist/theme_only_light.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

serviceWorker.unregister();
