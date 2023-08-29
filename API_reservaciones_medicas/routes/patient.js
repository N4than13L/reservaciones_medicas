// importaciones
const express = require("express");
const router = express.Router();
const patientsController = require("../controllers/patient");

// definir rutas
router.get("/paciente-test", patientsController.pruebaPatient);

// exportar
module.exports = router;
