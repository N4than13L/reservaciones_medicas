// importar dependencias y modulos.
const Patient = require("../models/history");

// accion de prueba.
const pruebaHistorialMed = (req, res) => {
  return res.status(200).send({
    message: "metodo de prueba desde el controlador de pacientes",
  });
};

const guardarHistorialMedico = (req, res) => {
  // recoger el id de paciente por la url.
  // let pacienteId = req.params.pacienteId;

  // recoger los datos de la peticion.
  let params = req.body;

  // comprobar que me lleguen los datos (+ validacion).
  if (!params.client || !params.symptoms) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar.",
    });
  }

  // crear objeto del paciente.
  let historial_a_guardar = new Patient(params);

  // hacer un push al array de objetos de historial.
  // historial_a_guardar.medicalhistory.push(params);

  // guardar pacientes.
  historial_a_guardar.save().then((historial_guardado) => {
    // devolver datos de la respuesta.
    if (historial_guardado) {
      return res.status(200).json({
        status: "success",
        message: "historial medico guardado correctamente",
        paciente: historial_guardado,
      });
    }
  });
};

module.exports = {
  pruebaHistorialMed,
  guardarHistorialMedico,
};
