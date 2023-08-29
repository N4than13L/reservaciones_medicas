// importar dependencias y modulos.
const bcrypt = require("bcrypt");
const Patient = require("../models/patient");

// importar servicios.
const jwt = require("../services/jwt");

// accion de prueba.
const pruebaPatient = (req, res) => {
  return res.status(200).send({
    message: "metodo de prueba desde el controlador de pacientes",
  });
};

const guardarPaciente = (req, res) => {
  // recoger los datos de la peticion.
  let params = req.body;

  // comprobar que me lleguen los datos (+ validacion).
  if (!params.name || !params.surname || !params.nick) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar.",
    });
  }

  // crear objeto del usuario.
  let paceinte_a_guardar = new Patient(params);

  // guardar usuarios.
  paceinte_a_guardar.save().then((paciente_guardado) => {
    // devolver datos de la respuesta.
    if (paciente_guardado) {
      return res.status(200).json({
        status: "success",
        message: "usuario pacinte correctamente",
        usuario: paciente_guardado,
      });
    }
  });
};

module.exports = {
  pruebaPatient,
  guardarPaciente,
};
