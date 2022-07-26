const User = require("../models/Usuarios")

const encontrarUsuarioPeloTelefone = async (telefone) => {
    return await User.findOne({telefone: telefone })
}

// criando usuario no banco de dados
const criarUsuario = async (body) => {
    return await User.create(body)
}

// Buscando usuario no banco de dados
const getUsuario = async () => {
    return await User.find()
}

// dando erro no update
// atualizando usuário
const findByIdAndUpdate = async (id, body) => {
    return await User.findByIdAndUpdate({_id: id}, body)
}

// deletar usuario
const findByIdAndRemove = async (id) => {
    return await User.findByIdAndRemove(id)
}

module.exports = {
    encontrarUsuarioPeloTelefone,
    criarUsuario,
    getUsuario,
    findByIdAndUpdate,
    findByIdAndRemove
}