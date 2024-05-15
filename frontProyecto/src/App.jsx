import { useState } from 'react'
import './App.css'
import CompMostrarClientes from './Componentes/compMostrarClientes'
import CompCrearClientes from './Componentes/compCrearClientes'
import CompEditarClientes from './Componentes/compEditarClientes'

import CompMostrarProductos from './Componentes/compMostrarProductos'
import CompCrearProductos from './Componentes/compCrearProductos'
import CompEditarProductos from './Componentes/compEditarProductos'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './template/nav'
import Footer from './template/footer'

function App() {

  
  return (
    
    <div> 
      <Nav/>

      <BrowserRouter>
      <Routes>
        <Route path='/clientes/' element={<CompMostrarClientes />} />
        <Route path='/clientes/agregar/' element={<CompCrearClientes />} />
        <Route path='/clientes/editar/:id' element={<CompEditarClientes />} />

        <Route path='/productos/' element={<CompMostrarProductos />} />
        <Route path='/productos/agregar' element={<CompCrearProductos />} />
        <Route path='/productos/editar/:id' element={<CompEditarProductos />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
