const express = require("express");

const axios = require("axios");
const bcrypt = require('bcryptjs');
const session = require("express-session");
const { vistaDocente, vistaDocenteAsignacionCursoAlumno } = require("../controllers/Docente/getdocente");
const { vistaAdmin, vistaRegistrarUsuario, vistaRegistrarAlumnos, vistaAdminRegistrarColegios, vistaAdminRegistrarAlumnos, vistaAdminRegistrarDocentes, vistaAdminRegistrarAsignacion, vistaAdminRegistrarCursos, vistasAdmingrados, vistaAdminRegistrarPeriodos, vistaAdminRegistrarMatricula, vistaAdminRegistrarDepartamentos, vistaAdminRegistrarProvincias, vistaAdminRegistrarDistritos } = require("../controllers/admin/getadmin");
const { vistasuper, vistaSuperRegistrarUsuario, vistaSuperRegistrarRoles, vistaSuperRegistrarColegios, vistaSuperRegistrarAlumnos, vistaSuperRegistrarDocentes, vistaSuperRegistrarAsignacion, vistasuperRegistrarCursos, vistasupergrados, vistasuperRegistrarPeriodos, vistaRegistrarDepartamentos, vistaRegistrarProvincias, vistaRegistrarDistritos, vistaRegistrarMatricula } = require("../controllers/superadmin/getsuper");
const { vistaDocumentacion, vistaDocumentacionUusuarios, vistaToken, vistaDocumentacionRoles, vistaDocumentacionDepartamentos, vistaDocumentacionProvincia, vistaDocumentacionDistrito, vistaDocumentacionColegio, vistaDocumentacionAlumno, vistaDocumentacionGrado, vistaDocumentacionSecciones, vistaDocumentacionMatricula, vistaDocumentacionDocente, vistaDocumentacionAsignaciones, vistaDocumentacionCursos, vistaDocumentacionNotas, vistaDocumentacionPeriodo, postToken } = require("../controllers/rutadocumentacion");
const { postUsuarios } = require("../controllers/superadmin/postsuperadmin");



const router = express.Router();


// Configurar express-session
router.use(
  session({
    secret: "tu_secreto_aqui",
    resave: false,
    saveUninitialized: true
  })
);

function protectRoute(req, res, next) {
  const user = req.session.user; // Obtener los datos del usuario de la sesión

  console.log(user)

  if (!user) {
    // Si el usuario no ha iniciado sesión, redirigir a la página de login
    return res.redirect("/login");
  }

  const idperfil = user.roles;

  console.log(idperfil) // Corregir el acceso al campo 'cargo' en lugar de 'idperfil'

  if (
    (idperfil === "SuperAdmin" && req.path.startsWith("/super")) ||
    (idperfil === "Director" && req.path.startsWith("/admin")) ||
    (idperfil === "Docente" && req.path.startsWith("/docente")) ||
    (idperfil === "Secretaria" && req.path.startsWith("/colegio"))
  ) {
    // Agregar datos adicionales al objeto de solicitud
    req.userId = user.id;
    req.userroles = user.roles;
    req.userColegio = user.colegio;
    req.userIdColegio = user.id_colegio;
    req.userDistrito = user.distrito;
    req.userCorreo = user.correo;
    next(); // Permitir el acceso
  } else {
    // Perfil no autorizado para acceder a esta ruta
    res.redirect("/login");
  }
}

//defino mis rutas

// RUTA PRINCIPAL

router.get("/", (req, res) => {
  res.render("login", { mensaje: "" });
});

router.get("/login", (req, res) => {
  res.render("login", { mensaje: "" });
});

router.post("/login", async (req, res) => {
  const { usuarioEntradaHtml, password } = req.body;

  try {
    // Obtener los usuarios de la API http://localhost:9100/admin/usuarios
    const response = await axios.get("http://ie.spring.informaticapp.com:8383/admin/usuarios");
    const usuarios = response.data;

    // Buscar el usuario por nombre de usuario
    const usuario = usuarios.find((user) => user.usuario === usuarioEntradaHtml);

    if (usuario) {
      // Comparar la contraseña hasheada del usuario con la contraseña proporcionada
      const passworEncryptado = await bcrypt.compare(password, usuario.password);

      if (passworEncryptado) {
        // Configurar la sesión del usuario


        console.log(usuario.id_usuario);
        console.log(usuario.roles.nombre);
        console.log(usuario.colegio.nombre_colegio);

        req.session.user = {
          id: usuario.id_usuario,
          roles: usuario.roles.nombre,
          id_colegio: usuario.colegio.id_colegio,
          colegio: usuario.colegio.nombre_colegio,
          distrito: usuario.colegio.distrito.nombre_distrito,
          correo: usuario.usuario
        };


        switch (usuario.roles.nombre) {
          case "SuperAdmin":
            res.redirect("/super");
            break;
          case "Director":
            res.redirect("/admin");
            break;
          case "Docente":
            res.redirect("/docente");
            break;
          case "Secretaria":
            res.redirect("/colegio");
            break;
          default:
            res.redirect("/login");
        }
      } else {
        res.render("login", { mensaje: "La contraseña es incorrecta" });
      }
    } else {
      res.render("login", { mensaje: "Este usuario no existe"  });
    }
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).send("Error en el servidor");
  }
});


// SUPER AMDINISTRADOR RUTAS


router.get("/super", protectRoute, vistasuper);
router.get("/super/usuarios", protectRoute, vistaSuperRegistrarUsuario);
router.get("/super/roles", protectRoute, vistaSuperRegistrarRoles);

router.post("/super/usuarios", postUsuarios);

router.get("/super/colegios", protectRoute, vistaSuperRegistrarColegios);
router.get("/super/alumnos", protectRoute, vistaSuperRegistrarAlumnos);
router.get("/super/docentes", protectRoute, vistaSuperRegistrarDocentes);
router.get("/super/asignaciones", protectRoute, vistaSuperRegistrarAsignacion);
router.get("/super/materias", protectRoute, vistasuperRegistrarCursos);
router.get("/super/grados", protectRoute, vistasupergrados);
router.get("/super/periodos", protectRoute, vistasuperRegistrarPeriodos);
router.get("/super/matriculas", protectRoute, vistaRegistrarMatricula);



router.get("/super/departamentos", protectRoute, vistaRegistrarDepartamentos);
router.get("/super/provincias", protectRoute, vistaRegistrarProvincias );
router.get("/super/distritos", protectRoute, vistaRegistrarDistritos );




// DOCENTES 


router.get("/docente", protectRoute, vistaDocente);
router.get("/docente/alumnos", protectRoute, vistaDocenteAsignacionCursoAlumno);




// ADMIN Y DIRECTORES

router.get("/admin", protectRoute, vistaAdmin);
router.get("/admin/usuarios", protectRoute, vistaRegistrarUsuario);
router.post("/admin/usuarios", postUsuarios);
router.get("/admin/alumnos", protectRoute, vistaAdminRegistrarAlumnos);

router.get("/admin/colegios", protectRoute, vistaAdminRegistrarColegios);
router.get("/admin/alumnos", protectRoute, vistaAdminRegistrarAlumnos);
router.get("/admin/docentes", protectRoute, vistaAdminRegistrarDocentes);
router.get("/admin/asignaciones", protectRoute, vistaAdminRegistrarAsignacion);
router.get("/admin/materias", protectRoute, vistaAdminRegistrarCursos);
router.get("/admin/grados", protectRoute, vistasAdmingrados);
router.get("/admin/periodos", protectRoute, vistaAdminRegistrarPeriodos);
router.get("/admin/matriculas", protectRoute, vistaAdminRegistrarMatricula);



router.get("/admin/departamentos", protectRoute, vistaAdminRegistrarDepartamentos);
router.get("/admin/provincias", protectRoute, vistaAdminRegistrarProvincias );
router.get("/admin/distritos", protectRoute, vistaAdminRegistrarDistritos );





// DOCUMENTACION DEL SISTEMA
router.get("/documentacion", vistaDocumentacion);
router.get("/documentacion/usuarios", vistaDocumentacionUusuarios);

router.get("/tokensecundaria", vistaToken);





router.get("/documentacion/roles", vistaDocumentacionRoles);
router.get("/documentacion/departamentos", vistaDocumentacionDepartamentos);
router.get("/documentacion/provincia", vistaDocumentacionProvincia);
router.get("/documentacion/distrito", vistaDocumentacionDistrito);
router.get("/documentacion/colegio", vistaDocumentacionColegio);
router.get("/documentacion/alumno", vistaDocumentacionAlumno);
router.get("/documentacion/grado", vistaDocumentacionGrado);
router.get("/documentacion/secciones", vistaDocumentacionSecciones);
router.get("/documentacion/matricula", vistaDocumentacionMatricula);
router.get("/documentacion/docente", vistaDocumentacionDocente);
router.get("/documentacion/asignaciones", vistaDocumentacionAsignaciones);
router.get("/documentacion/cursos", vistaDocumentacionCursos);
router.get("/documentacion/notas", vistaDocumentacionNotas);
router.get("/documentacion/periodo", vistaDocumentacionPeriodo);

























router.get('/logout', (req, res) => {
  // Aquí puedes agregar cualquier lógica necesaria para cerrar la sesión, como eliminar las cookies o limpiar la información de sesión en la base de datos.

  // Por ejemplo, si estás utilizando express-session, puedes usar el método destroy() para eliminar la sesión:
  req.session.destroy((err) => {
    if (err) {
      console.log('Error al cerrar sesión:', err);
    } else {
      // Redirige a la página de inicio de sesión u otra página de tu elección
      res.redirect('/login');
    }
  });
});





module.exports = router;

