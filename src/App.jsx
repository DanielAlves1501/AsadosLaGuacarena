import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import Home from "./views/home/Home";
import Imagenes from "./views/imagenes/Imagenes";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [hideMobileMenuIcon, setHideMobileMenuIcon] = useState(false);

  const [mainDishes, setMainDishes] = useState([]);

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
    ]).then((data) => {
      setMenuItems(data);

      let mainDishes = [
        {
          name: "Parrillas",
          imagePath: data[0].data[2].imagePath,
          path: "/imagenes/parrillas",
        },
        {
          name: "Pizzas",
          imagePath: data[2].data[2].imagePath,
          path: "/imagenes/pizzas",
        },
        {
          name: "Espetadas",
          imagePath: data[0].data[0].imagePath,
          path: "/imagenes/parrillas",
        },
        {
          name: "Pollo",
          imagePath: data[1].data[1].imagePath,
          path: "/imagenes/pollos",
        },
      ];

      setMainDishes(mainDishes);
    });

    console.log(mainDishes);
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

        <Routes>
          <Route path="/" element={<Home mainDishes={mainDishes} />} />
          <Route path="/imagenes/*" element={<Imagenes />}>
            <Route path="parrillas" element={<Parrillas />} />
            <Route path="pollos" element={<Pollos />} />
            <Route path="platosChef" element={<PlatosChef />} />
            <Route path="combos" element={<Combos />} />
            <Route path="postres" element={<Postres />} />
            <Route path="bebidas" element={<Bebidas />} />
            <Route path="hamburguesas" element={<Hamburguesas />} />
            <Route path="pizzas" element={<Pizzas />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </>
  );
}
export default App;
