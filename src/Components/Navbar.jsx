import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'
import { useContextGlobal } from './utils/global.context'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dataState, dataDispatch} = useContextGlobal()
  

  const changeTheme = () => {

    if(dataState.theme === ""){
      dataDispatch({type: "CHANGE_THEME", payload: "dark"})
    }

    if(dataState.theme === "dark"){
      dataDispatch({type: "CHANGE_THEME", payload: ""})
    }
    
  }

  
  return (
    <nav className={dataState.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className='icon'>
        <img src="./DH.ico" alt="DH-icono" />
      </div>

      <div className='rutas'>
        <Link to={routes.home}> Home</Link>
        <Link to={routes.favs}>Favoritos</Link>
        <Link to={routes.contact}>Contacto</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme} className={dataState.theme} > {dataState.theme === "" ? <DarkModeIcon/> : <LightModeIcon/>}</button>
      </div>
      
    </nav>
  )
}

export default Navbar