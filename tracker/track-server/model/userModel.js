const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email is already in used"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

module.exports = mongoose.model("User", userModel);
