import React from "react";
import logo from "../../assets/logo.png";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <nav
      className="navbar"
      style={{
        transform: `${showMobileMenu ? "translateX(0)" : "translateX(-100%)"}`,
      }}
    >
      <img src={logo} className="navbar__logo" alt="Logo" />

      <ul className="navbar-list">
        <li className="navbar-list__item">
          <Link to="/">Parrillas</Link>
        </li>
        <li className="navbar-list__item">
          {" "}
          <Link to="/pollos">Pollos</Link>
        </li>
        <li className="navbar-list__item">
          {" "}
          <Link to="/platosChef">Platos Chef</Link>
        </li>
        <li className="navbar-list__item">
          {" "}
          <Link to="/combos">Combos</Link>
        </li>
        <li className="navbar-list__item">
          {" "}
          <Link to="/postres">Postres</Link>
        </li>
        <li className="navbar-list__item">
          {" "}
          <Link to="/bebidas">Bebidas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
