const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  mobile: String,
  payment: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
