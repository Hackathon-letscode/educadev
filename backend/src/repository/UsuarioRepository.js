const User = require("../models/Usuarios")

const encontrarUsuarioPeloTelefone = async (telefone) => {
    return await User.findOne({telefone: telefone})
}

const encontrarUsuarioPorSenhaEtelefone = async (senha, telefone) => {
    return await User.findOne({senha: senha, telefone: telefone})
}

// criando usuario no banco de dados
const criarUsuario = async (body) => {
    return await User.create(body)
}

// Buscando usuario no banco de dados
const getUsuario = async () => {
    return await User.find()
}


const findUserById = async (id) => {
    return await User.findById({_id: id})
}

// dando erro no update
// atualizando usuário
const findByIdAndUpdate = async (id, body) => {
    console.log(id, body, "repository")
    return await User.findByIdAndUpdate(id, body, {new: true})
}

// deletar usuario
const findByIdAndRemove = async (id) => {
    return await User.findByIdAndRemove(id)
}

module.exports = {
    encontrarUsuarioPeloTelefone,
    encontrarUsuarioPorSenhaEtelefone,
    criarUsuario,
    getUsuario,
    findByIdAndUpdate,
    findByIdAndRemove,
    findUserById
}