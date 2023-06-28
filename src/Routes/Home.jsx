import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  // const {dentistas} = useContextGlobal()
  const {dentistasState} = useContextGlobal()
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        
        {dentistasState.dentistas.length 

            ? dentistasState.dentistas.map(dentista => (


            <Card data={dentista} key={dentista.id}/>
            
            ))
            : null
        }
      </div>
    </main>
  )
}

export default Home