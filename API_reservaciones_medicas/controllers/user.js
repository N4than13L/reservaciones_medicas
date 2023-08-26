// importar dependencias y modulos.
const bcrypt = require("bcrypt");
const User = require("../models/user");

// accion de prueba.
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "metodo de prueba desde el controlador de usuario",
  });
};

// registro de usuarios.
const registro = (req, res) => {
  // recoger los datos de la peticion.
  let params = req.body;

  // comprobar que me lleguen los datos (+ validacion).
  if (!params.name || !params.surname || !params.email || !params.password) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar.",
    });
  }

  // control de usurios duplicados.
  User.find({ $or: [{ email: params.email.toLowerCase() }] }).then(
    async (usuarios) => {
      if (usuarios && usuarios.length >= 1) {
        return res
          .status(200)
          .json({ status: "success", message: "Usuario existente" });
      }

      // cifrar la contrasena.
      let pwd = await bcrypt.hash(params.password, 10);
      params.password = pwd;

      // crear objeto del usuario.
      let usuario_a_guardar = new User(params);

      // guardar usuarios.
      usuario_a_guardar.save().then((usuario_guardado) => {
        if (usuario_guardado) {
          // devolver datos de la respuesta.
          return res.status(200).json({
            status: "success",
            message: "usuarios",
            usuario: usuario_guardado,
          });
        }
      });
    }
  );
};

module.exports = {
  pruebaUser,
  registro,
};
