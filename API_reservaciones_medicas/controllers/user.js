// importar dependencias y modulos.
const bcrypt = require("bcrypt");
const User = require("../models/user");

// importar servicios.
const jwt = require("../services/jwt");

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
        // devolver datos de la respuesta.
        if (usuario_guardado) {
          return res.status(200).json({
            status: "success",
            message: "usuario registrado correctamente",
            usuario: usuario_guardado,
          });
        }
      });
    }
  );
};

// login de usuario.
const login = async (req, res) => {
  //Recoger los parametros
  let params = req.body;

  if (!params.email || !params.password) {
    return res.status(400).send({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  //Buscar en la bbdd si existe
  try {
    let user = await User.findOne({ email: params.email }).exec();

    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "No existe el usuario",
      });
    }

    //Comprobar su contraseña
    let pwd = bcrypt.compareSync(params.password, user.password);

    if (!pwd) {
      return res.status(404).send({
        status: "error",
        message: "No te has identificado correctamente",
      });
    }

    //devolver token
    const token = jwt.create_token(user);

    //Devolver datos de usaurio
    return res.status(200).send({
      status: "success",
      message: "Te has identificado correctamente",
      user: {
        id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    return res.status(404).send({
      status: "error",
      message: "No existe el usuario",
    });
  }
};

module.exports = {
  pruebaUser,
  registro,
  login,
};
