const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middlewares/asyncMiddleware");

const User = require("../models/User");

exports.signup = asyncHandler(async (req, res) => {
  const { fullName, number, email, password } = req.body;

  //   hash password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  //   store into db
  const user = await User.create({
    fullName,
    number,
    email,
    password: hashedPassword,
  });

  const { _id } = user;

  // create jwt
  const token = await jwt.sign({ id: _id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "2d",
  });

  return res.status(201).json({
    success: true,
    token,
    fullName,
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password: userPassword } = req.body;

  // first check if the email is exists or nor
  const user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorResponse("User not found", 404));
  }
  const { password, _id, fullName } = user;

  // check password
  const isPassword = await bcrypt.compare(userPassword, password);

  if (!isPassword) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // generate token
  const token = await jwt.sign({ id: _id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: "2d",
  });

  return res.status(200).json({
    success: true,
    token,
    fullName,
  });
});
