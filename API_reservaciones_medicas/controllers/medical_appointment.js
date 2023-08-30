// importar dependencias y modulos.
const Patient = require("../models/patient");

// accion para guardar la cita medica.
const guardarCitaMedica = (req, res) => {
  // recoger el id de paciente por la url.
  let pacienteId = req.params.pacienteId;

  // recoger los datos de la peticion.
  let params = req.body;

  // comprobar que me lleguen los datos (+ validacion).
  if (!params.doctor || !params.date) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar.",
    });
  }

  Patient.findById(pacienteId)
    .exec()
    .then((err) => {
      // crear objeto del paciente.
      let cita_medica = new Patient(params);

      // hacer un push al array de objetos de historial.
      cita_medica.medicalappointment.push(params);

      // guardar pacientes.
      cita_medica.save().then((cita_guardada) => {
        // devolver datos de la respuesta.
        if (cita_guardada) {
          return res.status(200).json({
            status: "success",
            message: "historial medico guardado correctamente",
            cita: cita_guardada,
          });
        }
      });
    });
};

module.exports = {
  guardarCitaMedica,
};
