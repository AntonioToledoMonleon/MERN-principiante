const usuarioController = {}

const Usuario = require('../models/usuario')

//GET
usuarioController.getUsuarios = async(request, response) =>{
    const usuarios = await usuario.find()
    response.json(usuarios)
}

//POST
usuarioController.createUsuario = async(request, response) =>{
    const {nombre, apellido, edad, telefono, correo} = request.body;
    const newUsuario = new Usuario({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono: telefono,
        correo: correo
    })
    await newUsuario.save();
    response.json({message : '¡ Usuario creado con exito !'})
}

usuarioController.getUsuario = async(request, response) =>{
    const usuario = await Usuario.findById(request.params.id)
    response.json({usuario})
}

usuarioController.deleteUsuario = async(request, response) =>{
    const usuario = await Usuario.findByIdAndDelete(request.params.id)
    response.json({message: '¡ Usuario elminado con exito !'})
}

usuarioController.updateUsuario = async(request, response) =>{
    const {nombre, apellido, edad, telefono, correo} = request.body;
    await Usuario.findByIdAndUpdate(request.params.id, {
        nombre, 
        apellido,
        edad,
        telefono,
        correo
    })
    response.json({message: '¡ Usuario actualizado !'})

}

module.exports = usuarioController;