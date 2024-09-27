import React, { useState } from 'react'
import axios from 'axios'

const CrearUsuario = () => {

  const valorInicial = {
    nombre: '',
    apellido: '',
    edad: 18,
    telefono: 0,
    correo: '',
  }

  const [usuario, setUsuario] = useState(valorInicial)

  const capturarDatos = (event)=>{
    const{name, value} = event.target

    //"...usuario" trae una copia de lo q hay en la variable de estado "usuario" q contiene en este caso "valorInical", 
    //asi a la hora de cambiar el nombre por ejemplo, 
    //persistiran los datos de valor inicial, menos el nombre pq lo habremos cambiado
    setUsuario({...usuario, [name]:value}) 
  }

  const guardarDatos = async(event)=>{
    event.preventDefault(); //Quitar la recarga de la pagina ya estamos utilizando SPA
    
    //Logica para guardar usuario, peticion post
    const newUsuario = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo
    }

    await axios.post('http://localhost:4000/api/usuarios', newUsuario)

    setUsuario({...valorInicial})
  }

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="text-center mb-3">
        Crear Usuario
      </h2>
      <div className="card card-body">
        <form onSubmit={guardarDatos}>
          <div className="mb-3">
            <label for="form-nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="form-input-nombre" placeholder="Introduce tu nombre..." required name='nombre' value= {usuario.nombre} onChange={capturarDatos}/>
          </div>
          <div className="mb-3">
            <label for="form-apellido" className="form-label">Apellido:</label>
            <input type="text" className="form-control" id="form-input-apellido" placeholder="Introduce tu apellido..." required name='apellido' value= {usuario.apellido} onChange={capturarDatos}/>
          </div>
          <div className="mb-3">
            <label for="form-edad" className="form-label">Edad:</label>
            <input type="number" className="form-control" id="form-input-telefono" placeholder="Introduce tu edad..." required name='edad' value= {usuario.edad} onChange={capturarDatos}/>
          </div>
          <div className="mb-3">
            <label for="form-telefono" className="form-label">Telefono:</label>
            <input type="number" className="form-control" id="form-input-telefono" placeholder="Introduce tu telefono..." required name='telefono' value= {usuario.telefono} onChange={capturarDatos}/>
          </div>
          <div className="mb-3">
            <label for="form-correo" className="form-label">correo electronico:</label>
            <input type="text" className="form-control" id="form-input-correo" placeholder="Introduce tu apellido..." required name='correo' value= {usuario.correo} onChange={capturarDatos}/>
          </div>
          <button className="btn btn-primary form-control">Crear usuario</button>
        </form>
      </div>

    </div>
  )
}

export default CrearUsuario