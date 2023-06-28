import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  // const [dentista, setDentista] = useState({})
  // const [dentistaState, dentistaDispatch] = useReducer(dentistaReducer,dentistaInitialState)
  const {dentistasState, dentistasDispatch} = useContextGlobal()
  const params = useParams()
  const urlDentista = `https://jsonplaceholder.typicode.com/users/${params.id}`
  
  useEffect(() => {
    
    
    axios.get(urlDentista)
    .then(response => {
      console.log(response.data)
      dentistasDispatch({type: "GET_A_DENTIST", payload: response.data})
    })
  }, [urlDentista])

  const navigate = useNavigate()
  

  return (
    <>
      <h1>Detail Dentist {dentistasState.dentista.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='card-detail'>

        <h4>Nombre: {dentistasState.dentista.name}</h4>
        <h5>E-mail: {dentistasState.dentista.email}</h5>
        <h5>Tel: {dentistasState.dentista.phone}</h5>
        <h4>Web: {dentistasState.dentista.website}</h4>

      </div>

      <button onClick={() => navigate(-1)}>Back</button>
        
    </>
  )
}

export default Detail