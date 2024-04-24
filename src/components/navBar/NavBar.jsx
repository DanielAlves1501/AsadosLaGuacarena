import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ showMobileMenu, setShowMobileMenu }) => {
  useEffect(() => {
    if (window.innerWidth > 470) {
      setShowMobileMenu(true);
    }
  });
  return (
    <nav
      className={`navbar ${showMobileMenu ? "navbar--show" : "navbar--hide"}`}
    >
      <img src={logo} className="navbar__logo" alt="Logo" />

      <ul className="navbar-list">
        <li
          className="navbar-list__item"
          onClick={() => setShowMobileMenu(false)}
        >
          <Link to="/">Parrillas</Link>
        </li>
        <li
          className="navbar-list__item"
          onClick={() => setShowMobileMenu(false)}
        >
          {" "}
          <Link to="/pollos">Pollos</Link>
        </li>
        <li
          className="navbar-list__item"
          onClick={() => setShowMobileMenu(false)}
        >
          {" "}
          <Link to="/platosChef">Platos Chef</Link>
        </li>
        <li
          className="navbar-list__item"
          onClick={() => setShowMobileMenu(false)}
        >
          {" "}
          <Link to="/combos">Combos</Link>
        </li>
        <li
          className="navbar-list__item"
          onClick={() => setShowMobileMenu(false)}
        >
          {" "}
          <Link to="/postres">Postres</Link>
        </li>
        <li
          className="navbar-list__item"
          onClick={() => setShowMobileMenu(false)}
        >
          {" "}
          <Link to="/bebidas">Bebidas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
