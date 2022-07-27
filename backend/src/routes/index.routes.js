const usuarioRouter = require("../routes/UsuarioRotes")
const aulasRouter = require("../routes/AulasRotes")
const express = require("express")
const routes = express.Router();

routes.use("/usuario", usuarioRouter)
routes.use("/aulas", aulasRouter)
module.exports = routes;