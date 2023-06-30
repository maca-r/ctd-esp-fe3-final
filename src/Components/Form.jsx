import React from "react";
import { useContextGlobal } from "./utils/global.context";


const Form = ({datos, setDatos, handleSubmit}) => {
  //Aqui deberan implementar el form completo con sus validaciones

  const {themeState} = useContextGlobal()

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Ingrese su nombre</label>
        <input type="text" className={themeState.theme} onChange={(event) => setDatos({...datos, nombre: event.target.value})}/>
        
        <label>Ingrese su mail</label>
        <input type="email" className={themeState.theme} onChange={(event) => setDatos({...datos, email: event.target.value})}/>
        
        <button className={"form-button " + themeState.theme}>Enviar</button>

      </form>
    
    </>
  );
};

export default Form;
