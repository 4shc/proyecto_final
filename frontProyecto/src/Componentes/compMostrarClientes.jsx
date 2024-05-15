import './compMostrarClientes.css'
import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'

const URL = 'http://localhost:5000/api/clientes/'

const CompMostrarClientes = () =>{

  const [clientes, setClientes] = useState([])
    useEffect(()=> {
      getClientes()
    }, []);

  //Función para mostrar los clientes
  const getClientes = async () =>{
    const resul = await axios.get(URL)
    setClientes(resul.data)
  }

  //Función para eliminar clientes
  const eliminarClientes = async (id) =>{
    await axios.delete(`${URL}${id}`)
    getClientes();
  }

  return(

    <div className="container">
      <div className="row">
        <div className="col">
          <div className='clientesContainer'>
            <span className='clientes display-2'>CLIENTES</span><Link to = '/clientes/agregar/' className="btn btn-outline-secondary btn-add"><i className="fa-solid fa-user-plus"></i></Link>
          </div>

          <div className="padre-table table-responsive">
            <table className="table table-borderless table-hover table-dark table-striped align-middle rounded">
              <thead  className="">
                <tr>
                  <th>Nombres Cliente</th>
                  <th>Apellido Cliente</th>
                  <th>Cédula</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                  <th>Dirección</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>{cliente.nombres}</td>
                  <td>{cliente.apellidos}</td>
                  <td>{cliente.cedula}</td>
                  <td>{cliente.correo}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.direccion}</td>
                  <td>
                    <Link to={`/clientes/editar/${cliente._id}`} className="btn btn-sm btn-outline-success "><i className="fa-solid fa-user-pen"></i></Link>
                    <button onClick={() => eliminarClientes(cliente._id)} className="btn btn-sm btn-outline-danger ms-2"><i class="fa-solid fa-trash"></i></button>
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

export default CompMostrarClientes;