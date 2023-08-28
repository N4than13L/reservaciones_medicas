// importaciones
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

const check = require("../middlewares/auth");

// definir rutas
router.get("/user-test", check.auth, userController.pruebaUser);
router.post("/registro", userController.registro);
router.post("/login", userController.login);
router.get("/perfil/:id", check.auth, userController.perfil);

// exportar
module.exports = router;
