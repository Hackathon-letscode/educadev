const usuarioService = require("../service/UsuarioService")

const criar = async (req, res) => {
    console.log("Estou no criar")
    const usuario = req.body
    const response = await usuarioService.criarUsuario(usuario)
    return res.status(response.statusCode).json(response.data)
}

const encontrar = async (req, res) => {
    const response = await usuarioService.encontrarUsuario()
    return res.status(response.statusCode).json(response.data)
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const Usuario = req.body
    const response = await usuarioService.atualizar()
    return res.status(response.statusCode).json(response.data)

}

const remover = async (req, res) => {
    const id = req.params.id
    const response = await usuarioService.remover(id)
    return res.status(response.statusCode).json(response.data)
}

module.exports = {
    criar,
    encontrar,
    atualizar,
    remover
}