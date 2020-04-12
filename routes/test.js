const express = require("express");

const { createTest, tests, test } = require("../controllers/test");
const { protect } = require("../middlewares/auth");

const router = express.Router();

router.route("/").post(protect, createTest).get(protect, tests);
router.route("/:testId").get(protect, test);

module.exports = router;
