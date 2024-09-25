require('dotenv').config()

const app = require('./app')
require('./database')

//Logica para ejecutar el servidor
async function main() {
    await app.listen(app.get('port'))
    console.log('El servidor esta en ejecución en el puerto: ', app.get('port'));
}

main();