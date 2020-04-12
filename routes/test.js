const express = require("express");

const { createTest } = require("../controllers/test");
const { protect } = require("../middlewares/auth");

const router = express.Router();

router.route("/").post(protect, createTest);

module.exports = router;
