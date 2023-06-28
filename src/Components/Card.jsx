import React, { useEffect, useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";



const Card = ({data}) => {

  const {dentistasState, favDispatch, favState} = useContextGlobal()
  const [disabledState, setDisabledState] = useState(false)
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
    

    if (!favState.favs.includes(data) ){
      favDispatch({type: 'LIKE', payload: data})    
      
    } else {
      alert("ya esta en favs")
      setDisabledState(true)
    }
    
  }
  


  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentista/`+ data.id }>

        <h4>{data.name}</h4>
        <h3>{dentistasState.dentistas.name}</h3>
        </Link>
        
        <img style={{width: "70px", height:"70px"}} src="./images/doctor.jpg" alt={"Dr." + data.name}/>
        <h5>{data.username}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} disabled={disabledState} className="favButton">{disabledState ? "Already fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;
