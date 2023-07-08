import React from "react";
import ReactDOM from "react-dom";
import "../src/client/index.css";
import App from "../src/client/App.tsx";

ReactDOM.hydrate(<App />, document.getElementById("react-root"));
