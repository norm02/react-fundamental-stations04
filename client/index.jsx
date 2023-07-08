import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const container = document.getElementById("react-root");
ReactDOM.hydrate(container, <App />);
