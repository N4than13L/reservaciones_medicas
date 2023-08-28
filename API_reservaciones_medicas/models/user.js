const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // campos automaticos.
  role: {
    type: String,
    default: "role_user",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("User", userSchema, "users");
