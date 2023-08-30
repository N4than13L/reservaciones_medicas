// importar dependencias y modulos.
const Patient = require("../models/patient");

// accion para guardar la cita medica.
const guardarFactura = (req, res) => {
  // recoger el id de paciente por la url.
  let pacienteId = req.params.pacienteId;

  // recoger los datos de la peticion.
  let params = req.body;

  // comprobar que me lleguen los datos (+ validacion).
  if (!params.practice_name || !params.attended_by || !params.amount) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar.",
    });
  }

  Patient.findById(pacienteId)
    .exec()
    .then((err) => {
      // crear objeto del paciente.
      let factura = new Patient(params);

      // hacer un push al array de objetos de historial.
      factura.medicalbill.push(params);

      // guardar pacientes.
      factura.save().then((factura_guardada) => {
        // devolver datos de la respuesta.
        if (factura_guardada) {
          return res.status(200).json({
            status: "success",
            message: "factura guardada correctamente",
            factura: factura_guardada,
          });
        }
      });
    });
};

module.exports = {
  guardarFactura,
};
