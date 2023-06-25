import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}> Home</Link>
      <Link to={routes.favs}>Favoritos</Link>
      <Link to={routes.contact}>Contacto</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar