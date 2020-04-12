const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
  },
  number: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
