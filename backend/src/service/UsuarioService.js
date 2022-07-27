const usuarioRepository = require("../repository/UsuarioRepository")
const jwt = require('jsonwebtoken');
require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
  });

const security = require("../utils/Security")

const criarUsuario = async (userParam) => {
    try {
        const {nome, telefone, email, senha} = userParam;
        let Usuario = await usuarioRepository.encontrarUsuarioPeloTelefone(telefone)
        if (Usuario) {
            return {
            statusCode: 406,
            data: "Usuario já cadastrado"
            }
        }

        const hashSenha = security.encrypt(senha)

        const usuarioData = {
            nome,
            telefone,
            email,
            senha: hashSenha
        }

        Usuario = await usuarioRepository.criarUsuario(usuarioData)
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

const encontrarUsuario = async () => {
    try {
        const Usuario = await usuarioRepository.getUsuario();
        if (!Usuario) {
            return{
                statusCode: 404,
                data: "nenhum usuário encontrado"
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

const atualizar = async (telefone, body) => {
    try {
        console.log("Estou na service")
        let Usuario = await usuarioRepository.encontrarUsuarioPeloTelefone(telefone, body)
        if (!Usuario) {
            return {
                statusCode: 404,
                data: "Nenhum Usuario encontrado"
            }
        }
        Usuario = await usuarioRepository.findByIdAndUpdate(Usuario._id, body)
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

const login = async (telefone, senha) => {
    console.log("login service", telefone, senha)
    try {
        const senhaUsuario = await usuarioRepository.encontrarUsuarioPeloTelefone(telefone)

        if (senhaUsuario) {
            const hash = senhaUsuario.senha
            const verifyPassword = security.verifyPassword(senha, hash)
            if (!verifyPassword) {
                return {
                    statusCode: 500,
                    data: "Senha Inválida!"
                }
            }

            const usuario = await usuarioRepository.encontrarUsuarioPorSenhaEtelefone(telefone, hash)

            if (!usuario) {
                return {
                    statusCode: 500,
                    data: "Login Inválido!"
                }
            }

            const token = jwt.sign({usuario}, process.env.SECRET_KEY, {
                expirestIn: 3000 // expiração
            })
            const refreshToken = jwt.sign({user}, preocess.env.SECRET_KEY, {
                expiresIn: 8000
            })

            const usuarioAll = await usuarioRepository.findUserById(usuario._id)
            const data = { auth: true, token: token, refreshToken: refreshToken, user: usuarioAll }
            return {
                statusCode: 200,
                data: data
            }
        }
        else {
            return {
                statusCode: 402,
                data: "Usuário não encontrado"
            }
        }
        }
        catch (error) {
            return {
                statusCode: 500,
                data: error
        }
    }
}

const refreshToken = async (token) => {
    const tokenDecodificado = jwt.decode(token)
    if(!tokenDecodificado) {
        return {
            statusCode: 500,
            data: "Erro na decodificação do token!"
        }
    }

    const {telefone, senha} = tokenDecodificado.usuario
    const usuario = await usuarioRepository.encontrarUsuarioPorSenhaEtelefone(telefone, senha)
    if (!usuario) {
        return {
            statusCode: 500,
            data: "usuário invalido!"
        }
    }
    const refreshToken = jwt.sign({usuario}, process.env.SECRET_KEY, {expiresIn: process.env.REFRESH_TOKEN_LIFE})
    const data = { refreshToken: refreshToken}

    return {
        statusCode: 200,
        data: data
    }
}

module.exports = {
    criarUsuario,
    encontrarUsuario,
    atualizar,
    remover,
    login,
    refreshToken
}