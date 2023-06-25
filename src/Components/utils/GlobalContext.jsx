import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

const dataReducer = (dataState, action) => {}
const themeReducer = (themeState, action) => {} 

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favState, favDispatch] = useReducer(dataReducer, initialState.data)
  const [themeState, themeDispatch] = useReducer(themeReducer, initialState.theme)
  const [dentistas, setDentistas] = useState({})
  const [dentista, setDentista] = useState({})
  const urlDentistas = "https://jsonplaceholder.typicode.com/users"
  const urlDentista = "https://jsonplaceholder.typicode.com/users/:id"

  


  useEffect(() => {
    axios.get(urlDentistas)
    .then(response => {
      console.log(response.data)
      setDentistas(response.data)
    })
  }, [])
  useEffect(() => {
    axios.get(urlDentista)
    .then(response => {
      console.log(response.data)
      setDentista(response.data)
    })
  }, [])

  

  
  return (
    <ContextGlobal.Provider value={{
      dentistas, setDentistas,
      dentista, setDentista,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
