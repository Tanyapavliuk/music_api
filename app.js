const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const groupRouter = require("./routes/api/group");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/group", groupRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Server Error";
  res.status(status).json({ message: err.message });
});

module.exports = app;
