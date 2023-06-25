import React from 'react'
import Card from '../Components/Card'

import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentistas} = useContextGlobal()
  // const [dentistas, setDentistas] = useState([])

  // const [dentista, setDentista] = useState({})

  // const urlDentistas = "https://jsonplaceholder.typicode.com/users"

  // const urlDentista = "https://jsonplaceholder.typicode.com/users/:id"
  
  // useEffect(() => {
  //   axios.get(urlDentistas)
  //   .then(response => {
  //     console.log(response.data)
  //     setDentistas(response.data)
      
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.get(urlDentista)
  //   .then(response => {
  //     console.log(response.data)
  //     setDentista(response.data)

  //   })
  // }, [])
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        
        {dentistas.length 
            ? dentistas.map(dentista => (

            <Link to={`/dentist/` + dentista.id} key={dentista.id}>
              
            <Card data={dentista}/>
            
            </Link>
            ))
            : null
        }
      </div>
    </main>
  )
}

export default Home