const mongoose = require("mongoose");

const conexion = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/reservaciones_medicas");
    console.log("connectado correctamente a reservaciones_medicas");
  } catch (error) {
    console.log(error);
    throw new Error(
      "No se ha podido conectar revisa la base de datos no este duplicada."
    );
  }
};

module.exports = conexion;
