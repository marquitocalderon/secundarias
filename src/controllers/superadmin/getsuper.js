const axios = require("axios");
const bcrypt = require('bcryptjs');






const vistasuper = async (req, res) => {
 
  res.render("superadmin/vistasuper"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};


const vistaSuperRegistrarUsuario = async (req, res) => {
 
  try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;

      
      const responseRoles = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
      const roles = responseRoles.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseUsuarios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/usuarios");
      const usuarios = responseUsuarios.data; // Suponiendo que la respuesta contiene los datos de los usuarios

      const responsecolegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegiosGet = responsecolegios.data; 
  
      res.render("superadmin/superusuario", { roles, usuarios, colegio, colegiosGet, userId , roles2  }); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("superadmin/superusuario"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
};


const vistaSuperRegistrarRoles = async (req, res) => {
 
  try {
    const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
    const vistaroles = response.data; // Suponiendo que la respuesta contiene los datos de los roles

    res.render("superadmin/registrarroles", { vistaroles}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto

  } catch (error) {
    res.render("superadmin/registrarroles"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
  }
};


const vistaSuperRegistrarColegios = async (req, res) => {
 
  try {

    const userId = req.userId;
    const roles2 = req.userroles;
    const colegio = req.userColegio;

    const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
    const vistacolegios = response.data; // Suponiendo que la respuesta contiene los datos de los roles

    res.render("superadmin/colegios", { vistacolegios , userId, roles2 , colegio}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto

  } catch (error) {
    res.render("superadmin/colegios"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
  }
};

const vistaSuperRegistrarAlumnos = async (req, res) => {
 
  try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      
      const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
      const alumnos = responseAlumno.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("superadmin/registraralumnos", { alumnos , colegio , userId, roles2 , colegios , distrito}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("superadmin/registraralumnos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
};


const vistaSuperRegistrarDocentes = async (req, res) => {
 
  try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/docentes");
      const docentes = response.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("superadmin/docentes", { docentes , colegio , userId, roles2 , colegios , distrito}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("superadmin/docentes"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
};


  const vistaSuperRegistrarAsignacion = async (req, res) => {
 
    try {
        const userId = req.userId;
        const roles2 = req.userroles;
        const colegio = req.userColegio;
        const distrito = req.userDistrito;
        
        const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/asignacion");
        const asignacionDocente = response.data; // Suponiendo que la respuesta contiene los datos 
  
             
        const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
        const alumnos = responseAlumno.data; 
  
        const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
        const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
    
        res.render("superadmin/asignaciones", { asignacionDocente , colegio , userId, roles2 , colegios , distrito , alumnos}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
    
      } catch (error) {
        console.error(error);
        res.render("superadmin/asignaciones"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
      }
  };


  const vistasuperRegistrarCursos = async (req, res) => {
 
    res.render("superadmin/cursos"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  };







module.exports = { vistasuper , vistaSuperRegistrarUsuario , vistaSuperRegistrarRoles , vistaSuperRegistrarColegios , vistaSuperRegistrarAlumnos , vistaSuperRegistrarDocentes , vistaSuperRegistrarAsignacion , vistasuperRegistrarCursos
};
