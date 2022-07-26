const usuarioRepository = require("../repository/UsuarioRepository")
require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
  });

const criarUsuario = async (body) => {
    try {
        const {nome, telefone, email, senha} = body;
        const findUsuario = await usuarioRepository.encontrarUsuarioPeloTelefone(telefone)
        if (findUsuario) {
            return {
            statusCode: 406,
            data: "Usuario já cadastrado"
            }
        }
        const usuario = await usuarioRepository.criarUsuario(body)
        return {
            statusCode: 200,
            data: usuario
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }
}

const encontrarUsuario = async () => {
    try {
        const Usuario = await usuarioRepository.getUsuario();
        if (!Usuario) {
            return{
                statusCode: 404,
                data: "nenhum livro encontrado"
            }
        }
        return {
            statusCode: 200,
            data: Usuario
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }
}

const atualizar = async (id, atualizarUsuario) => {
    try {
        const Usuario = usuarioRepository.findByIdAndUpdate(id, atualizarUsuario, {new: true})
        if (!Usuario) {
            return {
                statusCode: 404,
                data: "Nenhum Usuario encontrado"
            }
        }
        return {
            statusCode: 200,
            data: Usuario
        }
    } 
    catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }
}

const remover = async (id) => {
    try {
        const Usuario = usuarioRepository.findByIdAndRemove(id)
        if (!Usuario) {
            return {
                statusCode: 404,
                data: "Nenhum usuário encontrado"
            }
        }

        await usuarioRepository.findByIdAndRemove(id)

        return {
            statusCode: 200,
            data: Usuario
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }
}

module.exports = {
    criarUsuario,
    encontrarUsuario,
    atualizar,
    remover
}