const {Router} = require('express')
const router = Router()

router.route('/')
    .get() //esto hara una peticion get a la ruta '/'
    .post() //esto hara una peticion post a la ruta '/'

router.route('/:id')
    .get() //Haremos el get para consultar un documento en especifico
    .delete()
    .put() //actualizar campos del documento

module.exports = router;