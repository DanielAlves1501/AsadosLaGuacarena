import React, { useEffect } from "react";
import "./imagenes.css";
import { useMenuContext } from "../../context/menuContex";
import NavBar from "../../components/navBar/NavBar";
import { Navigate, Outlet } from "react-router-dom";
import Parrillas from "../parrillas/Parrillas";

const Imagenes = () => {
  const { hideMobileMenuIcon, showMobileMenu, setShowMobileMenu } =
    useMenuContext();

  const menuNavbarItems = [
    { name: "Inicio", path: "/", link: true },
    { name: "Parrillas", path: "/imagenes/parrillas", link: true },
    { name: "Pollos", path: "/imagenes/pollos", link: true },
    { name: "Pizzas", path: "/imagenes/pizzas", link: true },
    { name: "Hamburguesas", path: "/imagenes/hamburguesas", link: true },
    { name: "Platos Chef", path: "/imagenes/platosChef", link: true },
    { name: "Combos", path: "/imagenes/combos", link: true },
    { name: "Postres", path: "/imagenes/postres", link: true },
    { name: "Bebidas", path: "/imagenes/bebidas", link: true },
  ];

  return (
    <>
      <div className="menu-bg"></div>
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
            listItems={menuNavbarItems}
            handleOnclick={() => {
              if (window.innerWidth <= 470) {
                setShowMobileMenu(false);
              }
            }}
          />
        </div>
      </header>

      <main className="menu">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Imagenes;
