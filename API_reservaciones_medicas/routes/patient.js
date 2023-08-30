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

router.get("/ver-paciente/:id", check.auth, patientsController.paciente);

router.get("/ver-pacientes", check.auth, patientsController.pacientes);

// exportar
module.exports = router;
