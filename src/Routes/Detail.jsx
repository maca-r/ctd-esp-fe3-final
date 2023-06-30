import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {dataState,dataDispatch} = useContextGlobal()
  const params = useParams()
  const urlDentista = `https://jsonplaceholder.typicode.com/users/${params.id}`
  
  useEffect(() => {    
    axios.get(urlDentista)
    .then(response => {
      console.log(response.data)
      dataDispatch({type: "GET_A_DENTIST", payload: response.data})
    })
  }, [urlDentista])

  const navigate = useNavigate()
  

  return (
    <>
      <h1>Detail Dentist {dataState.dentista.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <td>Nombre</td>
        <td>E-mail</td>
        <td>Tel</td>
        <td>Web</td>
        <tr>
          <th>{dataState.dentista.name}</th>
          <th>{dataState.dentista.email}</th>
          <th>{dataState.dentista.phone}</th>
          <th>{dataState.dentista.website}</th>
        </tr>
      </table>

      <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        
    </>
  )
}

export default Detail