require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

import React from "react";
import ReactCreateElement from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import App from "../client/App";

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  const appContent = ReactDOMServer.renderToString(ReactCreateElement(App));
  //public/index.htmlを読み込む
  const html = `
  <!DOCTYPE html>
  <html class="scroll-smooth">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
    </head>
    <body>
      <div id="react-root"></div>
      <script type="module" src="./main.js"></script>
    </body>
  </html>
  `;
  res.send(html);
});
app.use(express.static("./build"));

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});

//
