// importar dependencias y modulos.
const bcrypt = require("bcrypt");
const User = require("../models/user");

// importar servicios.
const jwt = require("../services/jwt");

// accion de prueba.
const pruebaPatient = (req, res) => {
  return res.status(200).send({
    message: "metodo de prueba desde el controlador de pacientes",
  });
};

module.exports = {
  pruebaPatient,
};
