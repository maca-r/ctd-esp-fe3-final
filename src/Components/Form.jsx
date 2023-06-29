import React from "react";


const Form = ({datos, setDatos, handleSubmit}) => {
  //Aqui deberan implementar el form completo con sus validaciones


  return (
    <div >
      <form onSubmit={handleSubmit} >
        <label>Ingrese su nombre</label>
        <input type="text" onChange={(event) => setDatos({...datos, nombre: event.target.value})}/>
        
        <label>Ingrese su mail</label>
        <input type="email" onChange={(event) => setDatos({...datos, email: event.target.value})}/>
        
        <button>Enviar</button>

      </form>
    
    </div>
  );
};

export default Form;
