const Aulas = require("../models/Aulas");
const routesAulas = require("../routes/AulasRotes");


// buscando aula
const encontrarAulaPeloTitulo = async (titulo) => {
    return await Aulas.findOne({titulo: titulo})
}


// criando a aula no banco de dados
const criarAula = async (body) => {
    return Aulas.create(body)
}

// Buscando aulas no banco de dados
const getAulas = async () => {
    return await Aulas.find()
}

// Atualizar aula
const findByIdAndUpdate = async (id, body) => {
    console.log(id, body, "Repository")
    return await Aulas.findByIdAndUpdate(id, body, {new: true})
}

// deletar aulas
const findByIdAndRemove = async (id) => {
    return await Aulas.findByIdAndRemove(id)
}

module.exports = {
    criarAula,
    encontrarAulaPeloTitulo,
    getAulas,
    findByIdAndRemove,
    findByIdAndUpdate
}