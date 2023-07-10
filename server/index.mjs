import ReactDOMServer from "react-dom/server";
import express from "express";
import React from "react";

import App from "../client/App.tsx";

const app = express();
const port = process.env.PORT || 9000;

//Appコンポーネントをレンダリングして、HTMLを生成する
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
//buildディレクトリの中身を公開する
app.use(express.static("build"));
//サーバーを起動する
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
