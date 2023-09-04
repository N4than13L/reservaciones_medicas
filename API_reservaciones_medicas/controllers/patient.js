// importar dependencias y modulos.
const Patient = require("../models/patient");

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
  if (!params.name || !params.surname || !params.date) {
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
        message: "pacinte correctamente",
        paciente: paciente_guardado,
      });
    }
  });
};

const paciente = async (req, res) => {
  // recibir el parametro del id del usuario por la url.
  const id = req.params.id;

  // sacar datos del usuario.
  const paciente_datos = await Patient.findById(id);

  // comprobar si llegan los datos.
  try {
    if (!paciente_datos) {
      return res.status(404).send({
        status: "error",
        message: "paciente no existe",
      });
    }

    // resultado positivo.
    return res.status(200).send({
      status: "success",
      message: "paciente registrado con exito",
      paciente: paciente_datos,
    });
  } catch (error) {
    return res.status(404).send({
      status: "error",
      message: "error en la consulta, intente en otra ocacion",
    });
  }
};

const pacientes = async (req, res) => {
  // sacar datos del usuario.
  const pacientes_datos = await Patient.find();

  // comprobar si llegan los datos.
  try {
    if (!pacientes_datos) {
      return res.status(404).send({
        status: "error",
        message: "no hay pacientes registrados",
      });
    }

    // resultado positivo.
    return res.status(200).send({
      status: "success",
      pacientes: pacientes_datos,
    });
  } catch (error) {
    return res.status(404).send({
      status: "error",
      message: "error en la consulta, intente en otra ocacion",
    });
  }
};

module.exports = {
  pruebaPatient,
  guardarPaciente,
  paciente,
  pacientes,
};
