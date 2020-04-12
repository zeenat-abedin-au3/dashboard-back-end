const express = require("express");

const { createTest, tests } = require("../controllers/test");
const { protect } = require("../middlewares/auth");

const router = express.Router();

router.route("/").post(protect, createTest).get(protect, tests);

module.exports = router;
