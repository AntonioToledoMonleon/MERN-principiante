const express = require('express')
const cors = require('cors')
const app = express();

//configuracion

//Le decimos a la variable 'app' q guarde la variable 'port'
//'process.env.PORT' sirve para desplegar una varibale de entorno con un puerto del sistema y si no hay usa el puero 4000 
app.set('port', process.env.PORT || 4000) 

//Middlewares
app.use(cors())
//Este middleware hara q cuando hagamos una peticion por GET o POST nos devuelva un JSON
app.use(express.json())

//Rutas
app.get('/', (request, response)=>{
    response.send("Bienvenido a mi api rest full");
})

//Ruta para la API de usuarios
app.use('/api/usuarios', require('./routes/usuario_routes'))

//Exportamos el modulo 'app' para utilizarlo en otro lugar del proyecto
module.exports = app;