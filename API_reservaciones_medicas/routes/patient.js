// importaciones
const express = require("express");
const router = express.Router();
const patientsController = require("../controllers/patient");
const check = require("../middlewares/auth");

// definir rutas
router.get("/paciente-test", patientsController.pruebaPatient);
router.post(
  "/guardar-paciente",
  check.auth,
  patientsController.guardarPaciente
);

// exportar
module.exports = router;
