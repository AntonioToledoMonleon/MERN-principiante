const usuarioController = {}

const Usuario = require('../models/usuario')

//GET
usuarioController.getUsuario = async(request, response) =>{
    const usuarios = await usuario.find()
    response.json(usuarios)
}

//POST
usuarioController.createUsuario = async(request, response) =>{
    const {nombre, apellido, edad, telefono, email} = request.body;
    const newUsuario = new Usuario({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono: telefono,
        correo: correo
    })
    await newUsuario.save();
    response.json({message : '¡ Usuario creado correctamente !'})
}

usuarioController.getUsuario = async(request, response) =>{
    
}

usuarioController.getUsuario = async(request, response) =>{
    
}

usuarioController.getUsuario = async(request, response) =>{
    
}