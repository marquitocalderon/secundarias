const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

// Configuración de CORS
app.use(cors());

// Configuración de rutas y vistas
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const rutas = require("./src/routes/rutas");
app.use(rutas)


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
