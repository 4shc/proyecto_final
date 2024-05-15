import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const URL = 'http://localhost:5000/api/clientes'

const CompCrearClientes = () => {

  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [cedula, setCedula] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const navigate = useNavigate()


  // Definimos la función 'Guardar'
  const guardarClientes = async (e) =>{
    e.preventDefault()
    await axios.post(URL, {
      nombres: nombres,
      apellidos: apellidos,
      cedula: cedula,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    })
    navigate('/clientes')
  }


  return(
    <div className="container">
      <h1 className="display-3 text-light">Agregar nuevo cliente</h1>
      <form onSubmit={guardarClientes} className="w-50 mx-auto bg-dark bg-gradient text-light rounded">

        <div className="m-3 pt-4">
          <label className="form-label">Nombre Clientes</label>
          <input value={nombres} onChange={(e) => setNombres(e.target.value)} className="form-control" type="text" />
        </div>

        <div className="m-3">
          <label className="form-label">Apellidos Clientes</label>
          <input value={apellidos} onChange={(e) => setApellidos(e.target.value)} className="form-control" type="text" />
        </div>

        <div className="m-3">
          <label className="form-label">Cédula Clientes</label>
          <input value={cedula} onChange={(e) => setCedula(e.target.value)} className="form-control" type="number" />
        </div>
        
        <div className="m-3">
          <label className="form-label">Correo</label>
          <input value={correo} onChange={(e) => setCorreo(e.target.value)} className="form-control" type="text" />
        </div>

        <div className="m-3">
          <label className="form-label">Telefono</label>
          <input value={telefono} onChange={(e) => setTelefono(e.target.value)} className="form-control" type="number" />
        </div>

        <div className="m-3">
          <label className="form-label">Dirección</label>
          <input value={direccion} onChange={(e) => setDireccion(e.target.value)} className="form-control" type="text" />
        </div>

        <button type="submit" className="btn btn-outline-success m-3"><i className="fa-regular fa-floppy-disk"></i></button>





      </form>
    </div>
  )
}

export default CompCrearClientes