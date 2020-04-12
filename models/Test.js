const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: [true, "Test name is required"],
  },
  numQuestion: {
    type: Number,
    required: [true, "Number of question is required"],
  },
  marks: {
    type: Number,
    required: [true, "Test marks is required"],
  },
  testTime: Number,
});

module.exports = mongoose.model("User", TestSchema);
