const axios = require("axios");
const bcrypt = require('bcryptjs');

const postUsuarios = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { nombre, usuario, password, rol , colegioUsuario , estado_user } = req.body;

    // Encriptar el password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Realizar solicitud POST para crear el usuario
    const response = await axios.post('http://ie.spring.informaticapp.com:8383/admin/usuarios', {
      nombre,
      usuario,
      password: hashedPassword,
      roles: {
        id_rol: rol
      },
      colegio: {
        id_colegio: colegioUsuario
      },
      estado_usuario: estado_user
    });
    // Enviar respuesta con estado 200
    res.status(200).send('Usuarios creados exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al enviar los usuarios');
  }
};

module.exports = { postUsuarios};