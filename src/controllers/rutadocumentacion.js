const axios = require("axios");




const vistaDocumentacion = async (req, res) => {
 
  res.render("documentacion/documentacion"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};

const vistaDocumentacionUusuarios = async (req, res) => {
 
  res.render("documentacion/usuarios"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};

const vistaToken = async (req, res) => {
 
  res.render("documentacion/generartoken"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};

const vistaDocumentacionRoles = async (req, res) => {
 
  res.render("documentacion/roles"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};
const vistaDocumentacionDepartamentos = async (req, res) => {
 
  res.render("documentacion/departamentos"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
};

const vistaDocumentacionProvincia = async (req, res) => {
 
  res.render("documentacion/provincia"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionDistrito = async (req, res) => {
 
  res.render("documentacion/distrito"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionColegio = async (req, res) => {
 
  res.render("documentacion/colegio"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionAlumno = async (req, res) => {
 
  res.render("documentacion/alumno"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionGrado = async (req, res) => {
 
  res.render("documentacion/grado"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionSecciones= async (req, res) => {
 
  res.render("documentacion/secciones"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionMatricula= async (req, res) => {
 
  res.render("documentacion/matricula"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionDocente= async (req, res) => {
 
  res.render("documentacion/docente"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionAsignaciones= async (req, res) => {
 
  res.render("documentacion/asignaciones"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionCursos= async (req, res) => {
 
  res.render("documentacion/cursos"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionNotas= async (req, res) => {
 
  res.render("documentacion/notas"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}
const vistaDocumentacionPeriodo= async (req, res) => {
 
  res.render("documentacion/periodo"); // Renderiza la vista "roles" pasando los datos de los roles a través del objeto
}









module.exports = { vistaDocumentacion , vistaDocumentacionUusuarios,vistaToken , vistaDocumentacionRoles, vistaDocumentacionDepartamentos, vistaDocumentacionProvincia, vistaDocumentacionDistrito, vistaDocumentacionColegio, vistaDocumentacionAlumno, vistaDocumentacionGrado, vistaDocumentacionSecciones, vistaDocumentacionMatricula, vistaDocumentacionDocente, vistaDocumentacionAsignaciones, vistaDocumentacionCursos, vistaDocumentacionNotas, vistaDocumentacionPeriodo};
