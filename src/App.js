import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, Contact, Tienda } from "./pages/pageIndex";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/tienda"} element={<Tienda />} />
        <Route path={"/tienda/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />

        <Route path={"/contacto"} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
