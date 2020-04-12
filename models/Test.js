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
  questions: [
    {
      question: String,
      "option-1": String,
      "option-2": String,
      "option-3": String,
      "option-4": String,
      answers: String,
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Test", TestSchema);
