import { createContext, useContext, useEffect, useReducer} from "react";
import axios from 'axios';


export const initialState = {
  theme: "",
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  dentistas: [],
  dentista: {}
}

export const ContextGlobal = createContext(undefined);

const dataReducer = (state, action) => {
  switch(action.type){

    case "LIKE":
    return {...state, favs: [action.payload,...state.favs]}
    case "DISLIKE":
      return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)};
    case "CHANGE_THEME":
      return {...state, theme: action.payload}
    case "GET_LIST":
      return {...state, dentistas: action.payload}
    case "GET_A_DENTIST":
      return {...state, dentista: action.payload}
    default:
      throw new Error()
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  const [dataState, dataDispatch] = useReducer(dataReducer, initialState)

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(dataState.favs))
  },[dataState.favs])

  const urlDentistas = "https://jsonplaceholder.typicode.com/users"


  useEffect(() => {
    axios.get(urlDentistas)
    .then(response => {
      console.log(response.data)
      dataDispatch(({type: 'GET_LIST', payload: response.data }))
      
  })
  }, [urlDentistas])
  

  
  return (
    <ContextGlobal.Provider value={{
      dataState,dataDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
