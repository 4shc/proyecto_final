import React from "react";
import foot from "../Componentes/img/foot.png"
const Footer = () =>{
  return(
    <footer className="card-body">
      <h4 className="card-title">2024 Todos los derechos reservados </h4>
      <p className="card-text"> Proyecto Frontend</p>
      <p><img className="foot" src={foot} alt="" /></p>
      <div className="card-footer text-muted"><a href="https://4shc.online/tech/">https://4shc.online/tech/</a></div>
    </footer>
  )
}
export default Footer