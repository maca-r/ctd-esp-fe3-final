import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/utils/routes";
import Layout from "./Components/Layout";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

import { useContextGlobal } from "./Components/utils/global.context";

function App() {

  const {themeState} = useContextGlobal()
  return (
      <div className={"App " + themeState.theme}>
        
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.dentist} element={<Detail/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
