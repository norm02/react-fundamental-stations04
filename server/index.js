import { jsx as _jsx } from "react/jsx-runtime";
import path from "path";
import fs from "fs";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../client/App";
var app = express();
var port = process.env.PORT || 9000;
app.get("/", function (req, res) {
    var appContent = ReactDOMServer.renderToString(_jsx(App, {}));
    var indexFile = path.resolve("./build/index.html");
    fs.readFile(indexFile, "utf8", function (err, data) {
        if (err) {
            console.error("Something went wrong:", err);
            return res.status(500).send("Failed to load the app.");
        }
        return res.send(data.replace('<div id="react-root"></div>', "<div id=\"react-root\">".concat(appContent, "</div>")));
    });
});
app.use(express.static("./build"));
app.listen(port, function () {
    console.log("listening on *:".concat(port));
});
