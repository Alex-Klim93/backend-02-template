const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 2,
  },
  username: {
    type: String,
    required: true,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    minLength: 2,
  },
});
module.exports = mongoose.model("User", userSchema);
