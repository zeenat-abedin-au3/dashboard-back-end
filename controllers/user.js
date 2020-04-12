const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/asyncMiddleware");

const User = require("../models/User");

exports.signup = asyncHandler(async (req, res) => {
  console.log(req.body);
  return res.status(201).json({
    success: true,
  });
});
