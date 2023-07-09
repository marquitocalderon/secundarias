const axios = require("axios");
const bcrypt = require('bcryptjs');




const vistaAdmin = async (req, res) => {
  const userId = req.userId;
  const roles2 = req.userroles;
  const colegio = req.userColegio;
    res.render("admin/vistaadmin" , {colegio , userId , roles2}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};

const vistaRegistrarUsuario = async (req, res) => {
 
    try {
        const userId = req.userId;
        const roles2 = req.userroles;
        const colegio = req.userColegio;

        
        const responseRoles = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
        const roles = responseRoles.data; // Suponiendo que la respuesta contiene los datos de los roles

        const responseUsuarios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/usuarios");
        const usuarios = responseUsuarios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
    
        res.render("admin/registrarusuario", { roles, usuarios, colegio,  userId , roles2  }); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
    
      } catch (error) {
        console.error(error);
        res.render("admin/registrarusuario"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
      }
};



const vistaRegistrarRoles = async (req, res) => {
 
    try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
        const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
        const vistaroles = response.data; // Suponiendo que la respuesta contiene los datos de los roles
    
        res.render("admin/registrarroles", { vistaroles , userId , roles2 , colegio}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
    
      } catch (error) {
        res.render("admin/registrarroles"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
      }
};


const vistaRegistrarSecciones = async (req, res) => {
 
    res.render("admin/registrarsecciones"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};


const vistaRegistrarMatricula = async (req, res) => {
 
  try {
      const userId = req.userId;
      const roles2 = req.userroles;

      
      const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
      const alumno = responseAlumno.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseperiodo = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
      const periodo = responseperiodo.data; 
      
      const responsematriculas = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
      const matriculas = responsematriculas.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("admin/registrarmatricula", { alumno, periodo, matriculas,  userId , roles2  }); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("admin/registrarusuario"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
};

const vistaRegistrarAlumnos = async (req, res) => {
 
  try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      
      const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
      const alumnos = responseAlumno.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("admin/registraralumnos", { alumnos , colegio , userId, roles2 , colegios , distrito}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("admin/registraralumnos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
};








module.exports = {  vistaAdmin , vistaRegistrarUsuario , vistaRegistrarRoles , vistaRegistrarSecciones , vistaRegistrarAlumnos };
