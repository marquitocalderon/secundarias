const axios = require("axios");
const bcrypt = require('bcryptjs');


const vistaDocente = async (req, res) => {
    const userId = req.userId;
    const roles2 = req.userroles;
    const colegio = req.userColegio;
    res.render("docente/vistadocente" , {userId, roles2, colegio}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};


const vistaDocenteAsignacionCursoAlumno = async (req, res) => {
 
    try {
        const userId = req.userId;
        const roles2 = req.userroles;
        const colegio = req.userColegio;
        const distrito = req.userDistrito;
        const correo = req.userCorreo;
        
        const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/asignacion");
        const asignacionDocente = response.data; // Suponiendo que la respuesta contiene los datos 
  
             
        const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
        const alumnos = responseAlumno.data; 
  
        const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
        const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
        

        res.render("docente/asignaciones", { asignacionDocente , colegio , userId, roles2 , colegios , distrito , alumnos , correo}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
    
      } catch (error) {
        console.error(error);
        res.render("docente/asignaciones"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
      }
  };






module.exports = { vistaDocente , vistaDocenteAsignacionCursoAlumno};
