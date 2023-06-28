import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favState} = useContextGlobal()
  
  return (
    <>
    {console.log(favState.favs)}
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favState.favs.map(fav =>
        
          // <Link to={'/dentista/' + fav.id} key={fav.id}>
          //   <Card data={fav}/>
          // </Link>)
          
          <Card data={fav} key={fav.id}/>
          )}
          
      </div>
    </>
  );
};

export default Favs;
