// modelo de factura.
const { Schema, model } = require("mongoose");

const medical_bill = Schema({
  client: {
    type: String,
    required: true,
  },
  attended_by: {
    type: String,
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
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

module.exports = model("Bill", medical_bill, "bills");
