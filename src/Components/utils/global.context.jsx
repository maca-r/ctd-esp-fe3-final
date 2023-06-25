import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


export const initialState = {
  theme: "", 
  data: JSON.parse(localStorage.getItem('favs')) || []}

export const ContextGlobal = createContext(undefined);

const dataReducer = (favState, action) => {
  switch(action.type){
    case "LIKE":
      return [...favState, action.payload]
    case "DISLIKE":
      return action.payload
    default:
      throw new Error()
  }
}

const themeReducer = (themeState, action) => {} 

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favState, favDispatch] = useReducer(dataReducer, initialState.data)

  const [themeState, themeDispatch] = useReducer(themeReducer, initialState.theme)

  const [dentistas, setDentistas] = useState({})

  const [dentista, setDentista] = useState({})

  const urlDentistas = "https://jsonplaceholder.typicode.com/users"
    
  useEffect(() => {
    axios.get(urlDentistas)
    .then(response => {
      console.log(response.data)
      setDentistas(response.data)
    })
  }, [])

  // const params = useParams()
  // console.log(params);
  
  // useEffect(() => {
  //   const urlDentista = `https://jsonplaceholder.typicode.com/users/${params.id}`  
  //   axios.get(urlDentista)
  //   .then(response => {
  //     console.log(response.data)
  //     setDentista(response.data)
  //   })
  // }, [])

  
  return (
    <ContextGlobal.Provider value={{
      dentistas, setDentistas,
      dentista, setDentista,
      favState, favDispatch,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
