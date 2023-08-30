// importaciones
const express = require("express");
const router = express.Router();
const historialMed = require("../controllers/medical_history");
const check = require("../middlewares/auth");

// definir rutas
// router.get("/paciente-test", patientsController.pruebaPatient);
router.post(
  "/guardar-hist-med/:id",
  check.auth,
  historialMed.guardarHistorialMedico
);

// exportar
module.exports = router;
