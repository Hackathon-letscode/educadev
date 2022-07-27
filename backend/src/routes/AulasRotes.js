const express = require("express")
const routesAulas = express.Router()

// importando a controler
const AulasController = require("../controller/AulasController")

routesAulas.post("", AulasController.criarAulas);
routesAulas.get("", AulasController.encontrarAulas);
routesAulas.put("/:titulo", AulasController.atualizarAulas)
routesAulas.delete("/:id", AulasController.removerAulas)

module.exports = routesAulas