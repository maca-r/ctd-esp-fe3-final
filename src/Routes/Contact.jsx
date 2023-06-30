import React, { useState } from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: ""
  })

  const [show, setShow] = useState(false)

  const [error, setError] = useState(false)

  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);

  const handleSubmit = (event) => {
    event.preventDefault()

    if((datos.nombre.length > 5) 
      && (emailRegex.test(datos.email))
      && !(datos.nombre.startsWith(" "))
      && !(datos.nombre.endsWith(" "))
      )
    {
      console.log(datos)
      setShow(true)
      setError(false)
    } else {
      setShow(false)
      setError(true)
    }
    
  }

  return (
    <div>

      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      
      <Form datos={datos} setDatos={setDatos} handleSubmit={handleSubmit}/>
      
      {show && <p>Gracias {datos.nombre}, te contactaremos cuanto antes via email</p>}
      {error && <p>Por favor verifique su información nuevamente</p>}
      
    </div>
  )
}

export default Contact