import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Contact, Tienda } from "./pages/pageIndex";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      
     

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/tienda"} element={ <Tienda />} />
        <Route path={"/contacto"} element={ <Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
