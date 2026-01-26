const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("CI/CD on Windows is working 🚀");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;