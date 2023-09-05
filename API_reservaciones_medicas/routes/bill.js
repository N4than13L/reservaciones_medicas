// importaciones
const express = require("express");
const router = express.Router();
const factura = require("../controllers/bill");
const check = require("../middlewares/auth");

// definir rutas
router.post("/guardar-factura", check.auth, factura.guardarFactura);

router.get("/ver-factura/", check.auth, factura.ver_factura);

// exportar
module.exports = router;
