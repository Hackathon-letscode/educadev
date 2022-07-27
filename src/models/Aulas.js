const mongoose = require("mongoose")

const AulasSchema = new mongoose.Schema ({
    horario: {
        type: Date,
        default: Date.now
    },
    materia: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    dataDePostagem: {
        type: Date,
        default: Date.now
    },
    classificacao: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Aulas", AulasSchema)