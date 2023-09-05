// importar dependencias y modulos.
const Patient = require("../models/bill");

// accion para guardar la cita medica.
const guardarFactura = (req, res) => {
  // recoger el id de paciente por la url.
  // let pacienteId = req.params.pacienteId;

  // recoger los datos de la peticion.
  let params = req.body;

  // comprobar que me lleguen los datos (+ validacion).
  if (
    !params.client ||
    !params.attended_by ||
    !params.treatment ||
    !params.amount
  ) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar.",
    });
  }

  // crear objeto del paciente.
  let factura = new Patient(params);

  // hacer un push al array de objetos de historial.
  // factura.medicalbill.push(params);

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
};

// sacar historial.
const ver_factura = async (req, res) => {
  // sacar datos del usuario.
  const factura_datos = await Patient.find().exec();
  // console.log(historiales_datos);

  // comprobar si llegan los datos.
  try {
    if (!factura_datos) {
      return res.status(404).send({
        status: "error",
        message: "no hay historial registrado",
      });
    }

    // resultado positivo.
    return res.status(200).send({
      status: "success",
      facturas: factura_datos,
    });
  } catch (error) {
    return res.status(404).send({
      status: "error",
      message: "error en la consulta, intente en otra ocacion",
    });
  }
};

module.exports = {
  guardarFactura,
  ver_factura,
};
