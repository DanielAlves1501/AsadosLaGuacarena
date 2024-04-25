import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import "./index.css";
import Parrillas from "./views/parrillas/Parrillas";
import Pollos from "./views/pollos/Pollos";
import PlatosChef from "./views/platosChef/PlatosChef";
import Combos from "./views/combos/Combos";
import Postres from "./views/postres/Postres";
import Bebidas from "./views/bebidas/Bebidas";
import GlobalProvider from "./context/menuContex";
import { getMenuItem } from "./utils/getMenuItem";
import Modal from "./components/modal/Modal";
import Hamburguesas from "./views/hamburguesas/Hamburguesas";
import Pizzas from "./views/pizzas/Pizzas";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [hideMobileMenuIcon, setHideMobileMenuIcon] = useState(false);

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
      <GlobalProvider
        value={{
          menuItems,
          setMenuItems,
          selectedDish,
          setSelectedDish,
          showModal,
          setShowModal,
          hideMobileMenuIcon,
          setHideMobileMenuIcon,
          showMobileMenu,
          setShowMobileMenu,
        }}
      >
        <Modal />
        <header>
          {!hideMobileMenuIcon && (
            <i
              className={`fa-solid fa-bars mobile-menu
            }`}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            ></i>
          )}

          <div className="container">
            <NavBar
              showMobileMenu={showMobileMenu}
              setShowMobileMenu={setShowMobileMenu}
            />
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
              <Route path="/hamburguesas" element={<Hamburguesas />} />
              <Route path="/pizzas" element={<Pizzas />} />
            </Routes>
          </div>
        </main>
        <footer></footer>
      </GlobalProvider>
    </>
  );
}
export default App;
