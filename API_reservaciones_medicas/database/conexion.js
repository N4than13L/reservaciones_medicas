const mongoose = require("mongoose");

const conexion = async () => {
  try {
    // usando direccion local
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1/reservaciones_medicas");
    console.log("connectado correctamente a reservaciones_medicas");
  } catch (error) {
    console.log(error);
    throw new Error(
      "No se ha podido conectar revisa la base de datos no este duplicada."
    );
  }
};

module.exports = conexion;
