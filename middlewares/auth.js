const jwt = require("jsonwebtoken");

const asyncHandler = require("./asyncMiddleware");
const ErrorRresponse = require("../utils/errorResponse");
const User = require("../models/User");

// Protect Routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // set token from bearer token in header
    token = req.headers.authorization.split(" ")[1];
  }
  // Make sure token exists
  if (!token) {
    return next(new ErrorRresponse("Not authorized.", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorRresponse("Not authorized.", 401));
  }
});
