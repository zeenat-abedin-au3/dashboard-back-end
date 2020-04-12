const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/asyncMiddleware");

const Test = require("../models/Test");

exports.createTest = asyncHandler(async (req, res) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const test = await Test.create(req.body);
  console.log(test);

  return res.json({
    success: true,
    message: "The test has been created successfully",
  });
});
