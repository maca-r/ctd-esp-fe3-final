import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


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