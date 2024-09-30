import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListaUsuario = () => {

  const [lista, setLista] = useState([])

  //Se utiliza para q cada vez haya un cambio en la lsita de usuarios de reenderice y se añada a "lista"
  useEffect(()=>{
    const getUsuarios = async()=>{
      const response = await axios.get('http://localhost:4000/api/usuarios')
      setLista(response.data)
    }
    getUsuarios();
  },[lista])

  const eliminarUsuario = async(id)=>{
    await axios.delete('http://localhost:4000/api/usuarios/' + id)
  }


  return (
    <div className='row'>
      {
        lista.map(list =>(
          //"key={list.id}", en este caso obtiene la id de los usuarios para referenciarlos
          <div className="col-md-4 p-2" key={list.id}> 
            <div className="card">
              <div className="card-header">
                <h5>Nombre: {list.nombre}</h5>
              </div>
              <div className="card-body">
                <p>Apellido: {list.apellido}</p>
                <p>Edad: {list.edad}</p>
                <p>Telefono: {list.telefono}</p>
                <p>Correo Electronico: {list.correo}</p>
              </div>
              <div className="card-footer">
                <button className='btn btn-danger' onClick={()=>eliminarUsuario(list._id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default ListaUsuario