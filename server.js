const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5001;

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/__TITLE__/g, "Home page")
      .replace(/__DESCRIPTION__/g, "new description");

    res.send(data);
  });
});
app.get("/projects", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    data = data
      .replace(/__TITLE__/g, "Projects")
      .replace(/__DESCRIPTION__/g, "Projects description");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
