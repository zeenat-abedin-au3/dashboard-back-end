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
  });
});
