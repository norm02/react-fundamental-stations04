import ReactDOM from "react-dom";
import App from "./App";

/*
const ReactDOM = require("react-dom");
const App = require("./App");
*/
const container = document.getElementById("react-root");
ReactDOM.hydrate(container, <App />);
