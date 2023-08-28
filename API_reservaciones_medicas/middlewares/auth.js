// importar modulos.
const jwt = require("jwt-simple");
const moment = require("moment");

// importar clave secreta.
const lib_jwt = require("../services/jwt");
const secret = lib_jwt.secret;

// funcion de autenticacion Middleware de autenticacion.
exports.auth = (req, res, next) => {
  // comprobar si me llega la cabezera de autenticacion.
  if (!req.headers.authorization) {
    return res.status(400).json({
      status: "error",
      message: "necesitas la cabezera de autenticaion para poder continuar",
    });
  }

  //   limpiar el token
  let token = req.headers.authorization.replace(/['"]+/g, "");

  // decodificar el token.
  try {
    let payload = jwt.decode(token, secret);

    // comprobar la expiracion del token.
    if (payload.exp <= moment().unix()) {
      return res.status(401).json({
        status: "error",
        message: "token expirado",
        error,
      });
    }
    // agregar datos del usuario a la request.
    req.user = payload;
  } catch (error) {
    if (!error) {
      return res.status(400).json({
        status: "error",
        message: "token invalido",
        error,
      });
    }
  }

  // pasar a la ajecucion de la accion.
  next();
};
