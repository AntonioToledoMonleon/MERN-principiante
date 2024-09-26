import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom' 

import Navegacion from "./components/Navegacion";
import CrearUsuario from "./components/CrearUsuario";
import ListaUsuario from "./components/ListaUsuario";

function App() {
  return (
    <div className="">
      <Navegacion/>
      <div class="container p-4">
        <Routes>
          <Route path="/" element={<ListaUsuario/>} />
          <Route path="/CrearUsuario" element={<CrearUsuario/>} />
          <Route path="/edit/:id" element={<ListaUsuario/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
