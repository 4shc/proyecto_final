import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const URL = 'http://localhost:5000/api/productos'

const CompCrearProductos = () => {

  const [marca, setMarca] = useState('')
  const [categoria, setCategoria] = useState('')
  const [proveedor, setProveedor] = useState('')
  const [referencia, setReferencia] = useState('')
  const [precio, setPrecio] = useState('')
  const navigate = useNavigate()

  // Definimos la función 'Guardar'
  const guardarProductos = async (e) =>{
    e.preventDefault()
    await axios.post(URL, {
      marca: marca,
      categoria: categoria,
      proveedor: proveedor,
      referencia: referencia,
      precio: precio,
    })
    navigate('/productos')
  }


  return(
    <div className="container">
      <h1 className="display-3 text-light">Agregar producto</h1>
      <form onSubmit={guardarProductos} className="w-50 mx-auto bg-dark bg-gradient text-light rounded">

        <div className="m-3 pt-4">
          <label className="form-label">Marca</label>
          <input value={marca} onChange={(e) => setMarca(e.target.value)} className="form-control" type="text" />
        </div>

        <div className="m-3">
          <label className="form-label">Categoría</label>
          <input value={categoria} onChange={(e) => setCategoria(e.target.value)} className="form-control" type="text" />
        </div>

        <div className="m-3">
          <label className="form-label">Proveedor</label>
          <input value={proveedor} onChange={(e) => setProveedor(e.target.value)} className="form-control" type="text" />
        </div>
        
        <div className="m-3">
          <label className="form-label">Referencia</label>
          <input value={referencia} onChange={(e) => setReferencia(e.target.value)} className="form-control" type="text" />
        </div>

        <div className="m-3">
          <label className="form-label">Precio</label>
          <input value={precio} onChange={(e) => setPrecio(e.target.value)} className="form-control" type="number" />
        </div>

        <button type="submit" className="btn btn-outline-success m-3"><i className="fa-regular fa-floppy-disk"></i></button>





      </form>
    </div>
  )
}

export default CompCrearProductos