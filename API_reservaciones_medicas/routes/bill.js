// importaciones
const express = require("express");
const router = express.Router();
const factura = require("../controllers/bill");
const check = require("../middlewares/auth");

// definir rutas
router.post("/guardar-factura/:id", check.auth, factura.guardarFactura);

// exportar
module.exports = router;
