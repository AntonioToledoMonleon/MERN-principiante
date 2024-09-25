const mongoose = require('mongoose')

//Cadena de conexion
const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : 'mongodb://localhost/dbtest'

mongoose.connect(URI)

//Hacemos q se conecte
const connection = mongoose.connection;

//Una vez la conexion se abra
connection.once('open', ()=>{
    console.log('La base de datos ha sido conectada: ', URI);
})