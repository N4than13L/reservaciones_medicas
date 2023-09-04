const { Schema, model } = require("mongoose");

const patientSchema = Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  date: {
    type: String,
  },
  // campos automaticos.
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Patient", patientSchema, "patients");
