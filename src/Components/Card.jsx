import React from "react";



const Card = ({data}) => {

  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
        <h4>{data.name}</h4>
        <img style={{width: "70px", height:"70px"}} src="./images/doctor.jpg" alt={"Dr. " + data.name}/>
        <h5>{data.username}</h5>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
