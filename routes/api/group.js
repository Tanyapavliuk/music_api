const express = require("express");

const { handleGetAll } = require("../../controllers/groupController");

const router = express.Router();

router.get("/", handleGetAll);

module.exports = router;
