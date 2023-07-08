import ReactDOMServer from "react-dom/server";
import express from "express";
import React from "react";

import App from "../client/App.tsx";

/*
const ReactDOMServer = require("react-dom/server");
const express = require("express");

const App = require("../client/App.tsx");
*/
const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  const appContent = ReactDOMServer.renderToString(React.createElement(App));
  const html = `<!DOCTYPE html>
  <html class="scroll-smooth">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width">
      <title>React Portfolio</title>
    </head>
    <body>
      <div id="root">${appContent}</div>
      <script src="/main.js"></script>
    </body>
  </html>`;
  res.send(html);
});

app.use(express.static("build"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
