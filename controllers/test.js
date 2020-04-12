const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/asyncMiddleware");

exports.createTest = asyncHandler(async (req, res) => {
  return res.json({
    success: true,
  });
});
