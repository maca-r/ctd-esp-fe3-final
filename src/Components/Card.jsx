import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Grade';

const Card = ({data}) => {

  const [favorite, setFavorite] = useState("")

  const {dataState, dataDispatch} = useContextGlobal()
  
  
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
    if (!dataState.favs.includes(data) ){
      dataDispatch({type: 'LIKE', payload: data})    
      setFavorite("like")
      alert("Add succesfully")
      
    } 
    else {

      dataDispatch({type: 'DISLIKE', payload: data})
      setFavorite("dislike")
    }
    
  }
  
  return (
    
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt={"Dr." + data.name}/>
        
        <Link to={`/dentista/`+ data.id }>
          <h4>{data.name}</h4>
        </Link>
        
        <h5>{data.username}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
          <button onClick={addFav} className={"favButton " + dataState.theme}>{favorite === 'like' ? <StarIcon style={{color:"gold"}}/> :<StarIcon style={{color:"gray"}}/>  }</button>
          {/* <button onClick={deleteFav} className={"deleteButton " + themeState.theme}>{<ThumbDownIcon/>}</button> */}
        
        
    </div>
  );
};

export default Card;
