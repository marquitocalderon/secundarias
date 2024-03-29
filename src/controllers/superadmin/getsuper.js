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
    const distrito = req.userDistrito;
    const idcolegio = req.userIdColegio;

    const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
    const vistacolegios = response.data;
    
    const responsedistritos = await axios.get("http://ie.spring.informaticapp.com:8383/admin/distritos");
    const vistadistritos = responsedistritos.data;// Suponiendo que la respuesta contiene los datos de los roles

    res.render("superadmin/colegios", { vistacolegios , vistadistritos,  userId, roles2 , colegio , distrito, idcolegio}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto

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
      const idcolegio = req.userIdColegio;
      
      const responseAlumno = await axios.get("http://ie.spring.informaticapp.com:8383/admin/alumnos");
      const alumnos = responseAlumno.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data;
      
      const responseGrados = await axios.get("http://ie.spring.informaticapp.com:8383/admin/grados");
      const grados = responseGrados.data;
      
      const responseSecciones = await axios.get("http://ie.spring.informaticapp.com:8383/admin/secciones");
      const secciones = responseSecciones.data;

  
      res.render("superadmin/registraralumnos", { alumnos , grados, secciones, colegio , userId, roles2 , colegios , distrito , idcolegio}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
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
      const idcolegio = req.userIdColegio;
      
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/docentes");
      const docentes = response.data; // Suponiendo que la respuesta contiene los datos de los roles

      const responseColegios = await axios.get("http://ie.spring.informaticapp.com:8383/admin/colegios");
      const colegios = responseColegios.data; // Suponiendo que la respuesta contiene los datos de los usuarios
  
      res.render("superadmin/docentes", { docentes , colegio , userId, roles2 , colegios , distrito , idcolegio}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
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
    
        res.render("superadmin/asignaciones", { asignacionDocente , materias, grados, secciones, idcolegio, colegio , userId, roles2 , colegios , distrito , alumnos , docentes}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
    
      } catch (error) {
        console.error(error);
        res.render("superadmin/asignaciones"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
      }
  };


  const vistasuperRegistrarCursos = async (req, res) => {
 
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
  
      res.render("superadmin/cursos", { materias , colegio , userId, roles2 , colegios , distrito , alumnos , idcolegio}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("superadmin/cursos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


  const vistasupergrados = async (req, res) => {
 
    try {
      const userId = req.userId;
      const roles2 = req.userroles;
      const colegio = req.userColegio;
      const distrito = req.userDistrito;
      
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/grados");
      const grados = response.data; // Suponiendo que la respuesta contiene los datos 
      res.render("superadmin/grados", {grados, colegio , userId, roles2 , distrito}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("superadmin/grados"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


  const vistasuperRegistrarPeriodos = async (req, res) => {
 
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
  
      res.render("superadmin/periodos", {periodos, idcolegio, colegio, colegios , distrito, roles2, userId}); // Renderiza la vista "usuarios" pasando los datos de los roles y usuarios a través del objeto
  
    } catch (error) {
      console.error(error);
      res.render("superadmin/periodos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


  const vistaRegistrarDepartamentos = async (req, res) => {
 
    try {
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/departamentos");
      const vistadepartamentos = response.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      res.render("superadmin/registrardepartamentos", {vistadepartamentos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("superadmin/registrardepartamentos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };
  

  const vistaRegistrarProvincias = async (req, res) => {
 
    try {
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/provincias");
      const vistaprovincias = response.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      const responsedepartamentos = await axios.get("http://ie.spring.informaticapp.com:8383/admin/departamentos");
      const vistadepartamentos = responsedepartamentos.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      res.render("superadmin/registrarprovincias", {vistaprovincias , vistadepartamentos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("superadmin/registrarprovincias"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };
  
  const vistaRegistrarDistritos = async (req, res) => {
 
    try {
      const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/distritos");
      const vistadistritos = response.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      const responseprovincias = await axios.get("http://ie.spring.informaticapp.com:8383/admin/provincias");
      const vistaprovincias = responseprovincias.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      const responsedepartamentos = await axios.get("http://ie.spring.informaticapp.com:8383/admin/departamentos");
      const vistadepartamentos = responsedepartamentos.data; // Suponiendo que la respuesta contiene los datos de los roles
  
      res.render("superadmin/registrardistritos", {vistadistritos, vistaprovincias, vistadepartamentos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("superadmin/registrardistritos"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  };


   
  const vistaRegistrarMatricula = async (req, res) => {
   
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

  
      res.render("superadmin/matricula", {vistamatricula, periodos , colegio, colegios , idcolegio , distrito , roles2 , userId , alumnos}); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
  
    } catch (error) {
      res.render("superadmin/matricula"); // Renderiza una vista de error en caso de que ocurra un problema con la solicitud
    }
  }; 





module.exports = { vistasuper , vistaSuperRegistrarUsuario , vistaSuperRegistrarRoles , vistaSuperRegistrarColegios , vistaSuperRegistrarAlumnos , vistaSuperRegistrarDocentes , vistaSuperRegistrarAsignacion , vistasuperRegistrarCursos , vistasupergrados , vistasuperRegistrarPeriodos , vistaRegistrarDepartamentos, vistaRegistrarDistritos, vistaRegistrarProvincias , vistaRegistrarMatricula
};
