const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    semestre: {
        type: String,
        require: true
    },
    cedula: {
        type: Number,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);