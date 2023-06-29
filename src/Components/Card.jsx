import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Card = ({data}) => {

  const {favDispatch, favState} = useContextGlobal()
  const [favorite, setFavorite] = useState("")
  
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    
    if (!favState.favs.includes(data) ){
      favDispatch({type: 'LIKE', payload: data})    
      setFavorite("LIKE")
      alert("Add succesfully")
    } else {
      
      favDispatch({type: 'DISLIKE', payload: data})
      setFavorite("DISLIKE")
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
        <button onClick={addFav} className="favButton">{favorite === 'LIKE' ? <StarIcon style={{color: "gold" }} /> : <StarBorderIcon/>}</button>
        
    </div>
  );
};

export default Card;
