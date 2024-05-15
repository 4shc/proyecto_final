import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const URL = 'http://localhost:5000/api/clientes/'

const CompEditarClientes = () => {

  const [nombres, setNombres] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [cedula, setCedula] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()


  // Función para actualizar clientes
  const editarClientes = async (e) =>{
    e.preventDefault()
    await axios.put(`${URL}${id}`, {
      nombres: nombres,
      apellidos: apellidos,
      cedula: cedula,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    })
    navigate('/clientes')
  }


  useEffect( () =>{
    getclientesID()
  }, [])
  
  const getclientesID = async () => {
    const resul = await axios.get(`${URL}${id}`)

    setNombres(resul.data.nombres)
    setApellidos(resul.data.apellidos)
    setCedula(resul.data.cedula)
    setCorreo(resul.data.correo)
    setTelefono(resul.data.telefono)
    setDireccion(resul.data.direccion)
  
  }

  return(
    <div className="container">
      <h1 className="display-3 text-light">Editar cliente</h1>
      <form onSubmit={editarClientes} className="w-50 mx-auto bg-dark bg-gradient text-light rounded">

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

        <button type="submit" className="btn btn-outline-success m-3"><i className="fa-regular fa-pen-to-square"></i></button>

      </form>

    </div>

  )

}
export default CompEditarClientes