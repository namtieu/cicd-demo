const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD working!");
});

app.get("/health", (req, res) => {
  res.status(200).send("ok");
});

module.exports = app;