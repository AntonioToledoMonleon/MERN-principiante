const {Schema, model} = require('moongose')

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String,
},
{
    timestamps: true
})

module.exports = model('Usuario', usuarioSchema)