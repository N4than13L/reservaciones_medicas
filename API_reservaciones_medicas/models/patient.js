const { Schema, model } = require("mongoose");

const patientSchema = Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  nick: {
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

module.exports = model("Patient", patientSchema, "patients");
