const {Router} = require('express')
const router = Router()

const {createUsuario,getUsuarios, getUsuario, updateUsuario, deleteUsuario} = require("../controller/usuarioController")

router.route('/')
    .get(getUsuarios) //esto hara una peticion get a la ruta '/'
    .post(createUsuario) //esto hara una peticion post a la ruta '/'

router.route('/:id')
    .get(getUsuario) //Haremos el get para consultar un documento en especifico
    .delete(deleteUsuario)
    .put(updateUsuario) //actualizar campos del documento

module.exports = router;