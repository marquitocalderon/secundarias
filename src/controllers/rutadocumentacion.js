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









module.exports = { vistaDocumentacion , vistaDocumentacionUusuarios,vistaToken , vistaDocumentacionRoles};
