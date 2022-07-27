const express = require("express");
const routesUsuarios = express.Router()
const verificarToken = require("../middleware/verificarToken")

// importando o controller
const UsuarioController = require("../controller/UsuarioController")

// routesUsuarios.get("", verificarToken, UsuarioController.criar)
routesUsuarios.post("", UsuarioController.criar);
routesUsuarios.post("/login", UsuarioController.login)
routesUsuarios.get("", UsuarioController.encontrar);
routesUsuarios.put("/:telefone", UsuarioController.atualizar)
routesUsuarios.delete("/:id", UsuarioController.remover)
routesUsuarios.post("/refreshtoken", verificarToken, UsuarioController.refreshToken)

module.exports = routesUsuarios