const express = require('express')
const cors = require('cors')
const app = express();

//configuracion

//Le decimos a la variable 'app' q guarde la variable 'port'
//'process.env.PORT' sirve para desplegar una varibale de entorno con un puerto del sistema y si no hay usa el puero 4000 
app.set('port', process.env.PORT || 4000) 

//Exportamos el modulo 'app' para utilizarlo en otro lugar del proyecto
module.exports = app;