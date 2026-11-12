const e = require("express");
const app = e();

app.get("/health", async (req, res) => {
  res
    .status(201)
    .json({
      message: "Server health Checkup Api",
      uptime: process.uptime(),
      timeStamp: new Date().toString(),
    });
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "working fine",
  });
});

module.exports = app;
