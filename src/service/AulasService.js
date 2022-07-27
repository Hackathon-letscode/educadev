const AulasRepository = require("../repository/AulasRepository")
require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});


const criarAulas = async (body) => {
    try {
        const {horario, materia, titulo, professor, descricao} = body
        const findAula = await AulasRepository.encontrarAulaPeloTitulo(titulo)
        if (findAula) {
            return {
                statusCode: 406,
                data: "Aula já cadastrada com esse nome"
            }
        }
        const aula = await AulasRepository.criarAula(body)
        return {
            statusCode: 200,
            data: "Aula criada com sucesso"
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }
}


const encontrarAulas = async () => {
    try {
        const Aulas = await AulasRepository.getAulas();
        if (!Aulas) {
            return{
                statusCode: 404,
                data: "nenhum livro encontrado"
            }
        }
        return {
            statusCode: 200,
            data: Aulas
        }
    }
    catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }
}

const atualizarAulas = async (titulo, body) => {
    try {
        let Aula = await AulasRepository.encontrarAulaPeloTitulo(titulo)
        if (!Aula) {
            return {
                statusCode: 404,
                data: "Nenhum Aula encontrado"
            }
        }
        Aula = await AulasRepository.findByIdAndUpdate(Aula._id, body)
        return {
            statusCode: 200,
            data: Aula
        }
    } 
    catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }
}

const removerAulas = async (titulo) => {
    try {
        let Aulas = await AulasRepository.encontrarAulaPeloTitulo(titulo)
        if (!Aulas) {
            return {
                statusCode: 404,
                data: "Nenhum aula encontrado"
            }
        }

        Aulas = await AulasRepository.findByIdAndRemove(Aulas._id)

        return {
            statusCode: 200,
            data: "Aula deletado com sucesso"
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
    criarAulas,
    encontrarAulas,
    removerAulas,
    atualizarAulas
}