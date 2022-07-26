const usuarioRouter = require("./UsuarioRotes")
const express = require("express")
const routes = express.Router();

routes.use("/usuario", usuarioRouter)

module.exports = routes;