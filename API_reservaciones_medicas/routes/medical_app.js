// importaciones
const express = require("express");
const router = express.Router();
const citaMedica = require("../controllers/medical_appointment");
const check = require("../middlewares/auth");

// definir rutas
router.post("/guardar-cita-med/:id", check.auth, citaMedica.guardarCitaMedica);

// exportar
module.exports = router;
