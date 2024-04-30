import React, { useEffect } from "react";
import "./menu.css";
import { useMenuContext } from "../../context/menuContex";
import NavBar from "../../components/navBar/NavBar";
import { Navigate, Outlet } from "react-router-dom";
import Parrillas from "../parrillas/Parrillas";

const Menu = () => {
  const { hideMobileMenuIcon, showMobileMenu, setShowMobileMenu } =
    useMenuContext();

  const menuNavbarItems = [
    { name: "Parrillas", path: "/menu/parrillas", link: true },
    { name: "Pollos", path: "/menu/pollos", link: true },
    { name: "Pizzas", path: "/menu/pizzas", link: true },
    { name: "Hamburguesas", path: "/menu/hamburguesas", link: true },
    { name: "Platos Chef", path: "/menu/platosChef", link: true },
    { name: "Combos", path: "/menu/combos", link: true },
    { name: "Postres", path: "/menu/postres", link: true },
    { name: "Bebidas", path: "/menu/bebidas", link: true },
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

export default Menu;
