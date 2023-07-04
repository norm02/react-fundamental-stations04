import path from "path";
import fs from "fs";

import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../client/App";

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  const appContent = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Failed to load the app.");
    }

    return res.send(
      data.replace(
        '<div id="react-root"></div>',
        `<div id="react-root">${appContent}</div>`
      )
    );
  });
});

app.use(express.static("./build"));

app.listen(port, () => {
  console.log(`listening on *:${port}`);
});

//起動方法
// node server/index.js
