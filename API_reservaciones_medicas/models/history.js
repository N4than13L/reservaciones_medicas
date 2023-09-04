const { Schema, model } = require("mongoose");

// modelo de historial médico.
const medical_history = Schema({
  client: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  patient: {
    type: Schema.ObjectId,
    ref: "Patient",
  },
});

module.exports = model("Med_history", medical_history, "histories");
