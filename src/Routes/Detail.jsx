import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {dentista, setDentista} = useContextGlobal()
  const params = useParams()
  
  
  useEffect(() => {
    
    const urlDentista = `https://jsonplaceholder.typicode.com/users/${params.id}`
    axios.get(urlDentista)
    .then(response => {
      // console.log(response.data)
      setDentista(response.data)
    })
  }, [])

  

  return (
    <>
      <h1>Detail Dentist {dentista.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className='card-detail'>

        <h4>Nombre: {dentista.name}</h4>
        <h5>E-mail: {dentista.email}</h5>
        <h5>Tel: {dentista.phone}</h5>
        <h4>Web: {dentista.website}</h4>
      </div>
    </>
  )
}

export default Detail