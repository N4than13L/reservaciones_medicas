// importar dependencias.
const jwt = require("jwt-simple");
const moment = require("moment");

// clave secreta.
const clave = "CLAVE_DE_PR0GRAMA_RESERVACIONES_MEDICAS_1";

// funcion para generar tokens.

const create_token = (user) => {
  const payload = {
    id: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    iat: moment().unix(),
    exp: moment().add(30, "days").unix(),
  };

  // devolver jwt (token) codificado
  return jwt.encode(payload, clave);
};

module.exports = { clave, create_token };
