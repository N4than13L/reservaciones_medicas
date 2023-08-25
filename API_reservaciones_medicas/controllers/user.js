// accion de prueba.
const pruebaUser = (req, res) => {
  return res.status(200).send({
    message: "metodo de prueba desde el controlador de usuario",
  });
};

module.exports = {
  pruebaUser,
};
