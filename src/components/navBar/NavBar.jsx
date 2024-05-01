import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import "./navBar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = ({
  showMobileMenu,
  setShowMobileMenu,
  listItems,
  handleOnclick,
}) => {
  useEffect(() => {
    if (window.innerWidth > 470) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 470) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
    }
  });

  return (
    <nav
      className={`navbar ${showMobileMenu ? "navbar--show" : "navbar--hide"}`}
    >
      <Link to="/">
        <img src={logo} className="navbar__logo" alt="Logo" />
      </Link>

      <ul className="navbar-list">
        {listItems.map((item, index) => (
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: index * 0.25 }}
            className="navbar-list__item"
            onClick={handleOnclick}
          >
            {item.link === true ? (
              <Link to={item.path}>{item.name}</Link>
            ) : (
              <a href={item.path} target={item.target} onClick={item.onClick}>
                {item.name}
              </a>
            )}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
