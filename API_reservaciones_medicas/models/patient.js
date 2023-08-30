const { Schema, model } = require("mongoose");

// modelo de historial médico.
const medical_history = Schema({
  title: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
  observations: {
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

// modelo de cita médica.
const medical_appointment = Schema({
  doctor: {
    type: String,
    required: true,
  },
  date: {
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

// modelo de factura.
const medical_bill = Schema({
  practice_name: {
    type: String,
    required: true,
  },
  attended_by: {
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
  nick: {
    type: String,
  },
  // campos automaticos.
  created_at: {
    type: Date,
    default: Date.now(),
  },
  medicalhistory: [medical_history],
  medicalappointment: [medical_appointment],
  medicalbill: [medical_bill],
});

module.exports = model("Patient", patientSchema, "patients");
