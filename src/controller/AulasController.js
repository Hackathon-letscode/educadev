const aulasService = require("../service/AulasService")

const criarAulas = async (req, res) => {
    console.log("Estou no criar")
    const aula = req.body
    const response = await aulasService.criarAulas(aula)
    return res.status(response.statusCode).json(response.data)
}

const encontrarAulas = async (req, res) => {
    const response = await aulasService.encontrarAulas()
    return res.status(response.statusCode).json(response.data)
}

const atualizarAulas = async (req, res) => {
    console.log("Estou na controller")
    const titulo = req.params.titulo
    const Aula = req.body
    const response = await aulasService.atualizarAulas(titulo, Aula)
    return res.status(response.statusCode).json(response.data)

}

const removerAulas = async (req, res) => {
    const id = req.params.id
    const response = await aulasService.removerAulas(id)
    return res.status(response.statusCode).json(response.data)
}


module.exports = {
    criarAulas,
    encontrarAulas,
    removerAulas,
    atualizarAulas
}