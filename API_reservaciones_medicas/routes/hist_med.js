// importaciones
const express = require("express");
const router = express.Router();
const historialMed = require("../controllers/medical_history");
const check = require("../middlewares/auth");

// definir rutas
// router.get("/paciente-test", patientsController.pruebaPatient);
router.post(
  "/guardar-hist-med/",
  check.auth,
  historialMed.guardarHistorialMedico
);

router.get("/hist-medico/", check.auth, historialMed.historiales);

// exportar
module.exports = router;
