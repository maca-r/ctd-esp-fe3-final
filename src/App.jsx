
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Routes/utils/routes";

import Layout from "./Components/Layout";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";

function App() {
  return (
      <div className="App">
        
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
