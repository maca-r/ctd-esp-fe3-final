import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useContextGlobal()
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favState.map(fav =>
          <Link to={'/dentista/' + fav.id} key={fav.id}>
            <li>{fav.name}</li>
          </Link>)}
      </div>
    </>
  );
};

export default Favs;
