const express = require("express");
const routesUsuarios = express.Router()

// importando o controller
const UsuarioController = require("../controller/UsuarioController")

routesUsuarios.post("", UsuarioController.criar);
routesUsuarios.get("", UsuarioController.encontrar);
routesUsuarios.put("/:id", UsuarioController.atualizar)
routesUsuarios.delete("/:id", UsuarioController.remover)

module.exports = routesUsuarios