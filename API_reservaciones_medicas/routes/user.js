// importaciones
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// definir rutas
router.get("/user-test", userController.pruebaUser);
router.post("/registro", userController.registro);
router.post("/login", userController.login);

// exportar
module.exports = router;
