import './compMostrarClientes.css'
import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'

const URL = 'http://localhost:5000/api/productos/'

const CompMostrarProductos = () =>{

  const [productos, setProductos] = useState([])
    useEffect(()=> {
      getProductos()
    }, []);

  //Función para mostrar los productos
  const getProductos = async () =>{
    const resul = await axios.get(URL)
    setProductos(resul.data)
  }

  //Función para eliminar productos
  const eliminarProductos = async (id) =>{
    await axios.delete(`${URL}${id}`)
    getProductos();
  }

  return(

    <div className="container">
      <div className="row">
        <div className="col">
          <div className='clientesContainer'>
            <span className='clientes display-2'>PRODUCTOS</span><Link to = '/productos/agregar/' className="btn btn-outline-secondary btn-add"><i className="fa-solid fa-user-plus"></i></Link>
          </div>

          <div className="padre-table table-responsive">
            <table className="table table-borderless table-hover table-dark table-striped align-middle rounded">
              <thead  className="">
                <tr>
                  <th>Marca</th>
                  <th>Categoría</th>
                  <th>Proveedor</th>
                  <th>Referencia</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.marca}</td>
                  <td>{producto.categoria}</td>
                  <td>{producto.proveedor}</td>
                  <td>{producto.referencia}</td>
                  <td>{producto.precio}</td>
                  <td>
                    <Link to={`/productos/editar/${producto._id}`} className="btn btn-sm btn-outline-success "><i className="fa-solid fa-user-pen"></i></Link>
                    <button onClick={() => eliminarProductos(producto._id)} className="btn btn-sm btn-outline-danger ms-2"><i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompMostrarProductos;