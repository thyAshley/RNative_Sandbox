const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userModel.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

userModel.methods.comparePassword = async function (inputPassword) {
  console.log(inputPassword, this.password);
  return new Promise((resolve, reject) => {
    bcrypt.compare(inputPassword.toString(), this.password, (err, success) => {
      if (err) return reject(err);
      if (!success) return reject("Error Logging in");

      resolve("Login Successful");
    });
  });
};

module.exports = mongoose.model("User", userModel);
