import { createContext, useContext, useEffect, useReducer} from "react";
import axios from 'axios';


export const initialState = {
  theme: "", 
  // data: JSON.parse(localStorage.getItem('favs')) || []
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  dentistas: [],
  dentista: {}
}

export const ContextGlobal = createContext(undefined);

const dataReducer = (state, action) => {
  switch(action.type){
    // case "LIKE":
    // return {favs: [action.payload,...state.favs], dentistas: state.dentistas, theme: state.theme, dentista: state.dentista}
    case "LIKE":
    return {...state, favs: [action.payload,...state.favs]}
    case "DISLIKE":
      return {...state, favs: state.favs.filter(fav => fav.id !== action.payload.id)};
    case "CHANGE_THEME":
      return {...state, theme: action.payload}
    default:
      throw new Error()
  }
}



const dentistasReducer = (state, action) => {
  switch(action.type){
    // case "GET_LIST":
    //   return {dentistas: action.payload, favs: state.favs, theme: state.theme, dentista: state.dentista}
    case "GET_LIST":
      return {...state, dentistas: action.payload}
    case "GET_A_DENTIST":
      return {...state, dentista: action.payload}
    default:
      throw new Error()
  }
}

// const themeReducer = (themeState, action) => {} 

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [favState, favDispatch] = useReducer(dataReducer, initialState)

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favState.favs))
  },[favState.favs])

  const [themeState, themeDispatch] = useReducer(dataReducer, initialState)


  const [dentistasState, dentistasDispatch] = useReducer(dentistasReducer, initialState)

  const urlDentistas = "https://jsonplaceholder.typicode.com/users"
    
  useEffect(() => {
    axios.get(urlDentistas)
    .then(response => {
      console.log(response.data)
      dentistasDispatch(({type: 'GET_LIST', payload: response.data }))
      
    })
  }, [urlDentistas])

  

  
  return (
    <ContextGlobal.Provider value={{
      favState, favDispatch,
      dentistasState, dentistasDispatch,
      themeState, themeDispatch
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
