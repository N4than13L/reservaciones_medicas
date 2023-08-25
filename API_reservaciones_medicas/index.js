// importar dependencias
const conexion = require("./database/conexion");
const express = require("express");
const cors = require("cors");

// mensaje de bienvenida.
console.log("api de nodejs para aplicacion medica");

// conexion a db.
conexion();

// crear el servidor de node.
const app = express();
const puerto = 3200;

// conf el cors.
app.use(cors());

// convertir datos del body a objs Js.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cargar conf. rutas.
// ruta de prueba.

app.get("/ruta-prueba", (req, res) => {
  return res.status(200).json({
    id: 1,
    nombre: "elver galarga",
    correo_electronico: "elvergalarga@gmail.com",
  });
});

// poner servidor a escuchar.
app.listen(puerto, () => {
  console.log("API ejecutandose en la ruta: http://localhost:3200/ruta-prueba");
});
