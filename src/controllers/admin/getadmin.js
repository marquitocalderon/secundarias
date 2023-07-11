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
        const distrito = req.userDistrito;
        const idcolegio = req.userIdColegio;
        
        const responseRoles = await axios.get("http://ie.spring.informaticapp.com:8383/admin/roles");
        const roles = responseRoles.data; // Suponiendo que la respuesta contiene los datos de los roles

        const responseUsuarios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/usuarios");
        const usuarios = responseUsuarios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
    
        res.render("admin/registrarusuario", { roles, usuarios, colegio,  userId , roles2 , distrito , idcolegio }); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
    
      } catch (error) {
        console.error(error);
        res.render("admin/registrarusuario"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
      }
};



const vistaAdminRegistrarColegios = async (req, res) => {
 
  try {

    const userId = req.userId;
    const roles2 = req.userroles;
    const colegio = req.userColegio;
    const distrito = req.userDistrito;
    const idcolegio = req.userIdColegio;

    const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
    const vistacolegios = response.data;
    
    const responsedistritos = await axios.get("http://ie.spring.informaticapp.com:8383/admin/distritos");
    const vistadistritos = responsedistritos.data;// Suponiendo que la respuesta contiene los datos de los roles

    res.render("admin/colegios", { vistacolegios , vistadistritos,  userId, roles2 ,colegio, distrito , idcolegio}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto

  } catch (error) {
    res.render("admin/colegios"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
  }
};

const vistaAdminRegistrarAlumnos = async (req, res) => {
 
  try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      const idcolegio = req.userIdColegio;
      
      const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
      const alumnos = responseAlumno.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data;
      
      const responseGrados = await axios.get("http://ie.spring.informaticapp.com:8383/admin/grados");
      const grados = responseGrados.data;
      
      const responseSecciones = await axios.get("http://ie.spring.informaticapp.com:8383/admin/secciones");
      const secciones = responseSecciones.data;

  
      res.render("admin/registraralumnos", { alumnos , grados, secciones, colegio , userId, roles2 , colegios , distrito , idcolegio}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("admin/registraralumnos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
};


const vistaAdminRegistrarDocentes = async (req, res) => {
 
  try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      const idcolegio = req.userIdColegio;
      
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/docentes");
      const docentes = response.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("admin/docentes", { docentes , colegio , userId, roles2 , colegios , distrito , idcolegio}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("admin/docentes"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
};


  const vistaAdminRegistrarAsignacion = async (req, res) => {
 
    try {
        const userId = req.userId;
        const roles2 = req.userroles;
        const colegio = req.userColegio;
        const distrito = req.userDistrito;
        const idcolegio = req.userIdColegio;
        
        const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/asignacion");
        const asignacionDocente = response.data; // Suponiendo que la respuesta contiene los datos 
  

        const responsed= await axios.get("http://ie.spring.informaticapp.com:8383/admin/docentes");
      const docentes = responsed.data;

        const responsemate = await axios.get("http://ie.spring.informaticapp.com:8383/admin/materias");
        const materias = responsemate.data;
        
        const responsegrados = await axios.get("http://ie.spring.informaticapp.com:8383/admin/grados");
        const grados = responsegrados.data;

        const responseSecciones = await axios.get("http://ie.spring.informaticapp.com:8383/admin/secciones");
        const secciones = responseSecciones.data;

        const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
        const alumnos = responseAlumno.data; 
  
        const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
        const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
    
        res.render("admin/asignaciones", { asignacionDocente , materias, grados, secciones, idcolegio, colegio , userId, roles2 , colegios , distrito , alumnos , docentes}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
    
      } catch (error) {
        console.error(error);
        res.render("admin/asignaciones"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
      }
  };


  const vistaAdminRegistrarCursos = async (req, res) => {
 
    try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      const idcolegio = req.userIdColegio;
      
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/materias");
      const materias = response.data; // Suponiendo que la respuesta contiene los datos 

           
      const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
      const alumnos = responseAlumno.data; 

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("admin/cursos", { materias , colegio , userId, roles2 , colegios , distrito , alumnos , idcolegio}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("admin/cursos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


  const vistasAdmingrados = async (req, res) => {
 
    try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/grados");
      const grados = response.data; // Suponiendo que la respuesta contiene los datos 
      res.render("admin/grados", {grados, colegio , userId, roles2 , distrito}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("admin/grados"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


  const vistaAdminRegistrarPeriodos = async (req, res) => {
 
    try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      const idcolegio = req.userIdColegio;
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/periodos");
      const periodos= response.data; // Suponiendo que la respuesta contiene los datos 

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("admin/periodos", {periodos, idcolegio, colegio, colegios , distrito, roles2, userId}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("admin/periodos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


  const vistaAdminRegistrarDepartamentos = async (req, res) => {
 
    try {
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/departamentos");
      const vistadepartamentos = response.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      res.render("admin/registrardepartamentos", {vistadepartamentos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("admin/registrardepartamentos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };
  

  const vistaAdminRegistrarProvincias = async (req, res) => {
 
    try {
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/provincias");
      const vistaprovincias = response.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      const responsedepartamentos = await axios.get("http://ie.spring.informaticapp.com:8383/admin/departamentos");
      const vistadepartamentos = responsedepartamentos.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      res.render("admin/registrarprovincias", {vistaprovincias , vistadepartamentos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("admin/registrarprovincias"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };
  
  const vistaAdminRegistrarDistritos = async (req, res) => {
 
    try {
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/distritos");
      const vistadistritos = response.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      const responseprovincias = await axios.get("http://ie.spring.informaticapp.com:8383/admin/provincias");
      const vistaprovincias = responseprovincias.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      const responsedepartamentos = await axios.get("http://ie.spring.informaticapp.com:8383/admin/departamentos");
      const vistadepartamentos = responsedepartamentos.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      res.render("admin/registrardistritos", {vistadistritos, vistaprovincias, vistadepartamentos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("admin/registrardistritos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


   
  const vistaAdminRegistrarMatricula = async (req, res) => {
   
    try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      const idcolegio = req.userIdColegio;

      const responseperiodos = await axios.get("http://ie.spring.informaticapp.com:8383/admin/periodos");
      const periodos= responseperiodos.data;

      const responsematricula = await axios.get("http://ie.spring.informaticapp.com:8383/admin/matricula");
      const vistamatricula = responsematricula.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data;

      const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
      const alumnos = responseAlumno.data; 

  
      res.render("admin/matricula", {vistamatricula, periodos , colegio, colegios , idcolegio , distrito , roles2 , userId , alumnos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("admin/matricula"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  }; 





module.exports = { vistaAdmin , vistaRegistrarUsuario  , vistaAdminRegistrarColegios , vistaAdminRegistrarAlumnos , vistaAdminRegistrarDocentes , vistaAdminRegistrarAsignacion , vistaAdminRegistrarCursos , vistasAdmingrados , vistaAdminRegistrarPeriodos , vistaAdminRegistrarDepartamentos, vistaAdminRegistrarDistritos, vistaAdminRegistrarProvincias , vistaAdminRegistrarMatricula
};







