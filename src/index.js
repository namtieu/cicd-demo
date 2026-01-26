const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD on Windows is working 🚀");
});

module.exports = app;