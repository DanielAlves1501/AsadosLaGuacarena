import React, { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import "./index.css";
import Galeria from "./views/parrillas/Parrillas";
import Parrillas from "./views/parrillas/Parrillas";
import Pollos from "./views/pollos/Pollos";
import PlatosChef from "./views/platosChef/PlatosChef";
import Combos from "./views/combos/Combos";
import Postres from "./views/postres/Postres";
import Bebidas from "./views/bebidas/Bebidas";
import GlobalProvider from "./context/menuContex";
import { getMenuItem } from "./utils/getMenuItem";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getParrillas = getMenuItem("parrillas");
    const getPollos = getMenuItem("pollos");
    const getPizzas = getMenuItem("pizzas");
    const getHamburguesas = getMenuItem("hamburguesas");
    const getEnsaladas = getMenuItem("ensaladas");
    const getPostres = getMenuItem("postres");

    Promise.all([
      getParrillas,
      getPollos,
      getPizzas,
      getEnsaladas,
      getHamburguesas,
      getPostres,
    ]).then((data) => setMenuItems(data));
  }, []);

  return (
    <>
      <GlobalProvider value={{ menuItems, setMenuItems }}>
        <header>
          <div className="container">
            <NavBar />
          </div>
        </header>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Parrillas />} />
              <Route path="/pollos" element={<Pollos />} />
              <Route path="/platosChef" element={<PlatosChef />} />
              <Route path="/combos" element={<Combos />} />
              <Route path="/postres" element={<Postres />} />
              <Route path="/bebidas" element={<Bebidas />} />
            </Routes>
          </div>
        </main>
        <footer></footer>
      </GlobalProvider>
    </>
  );
}
export default App;
