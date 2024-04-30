import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import NavBar from "../../components/navBar/NavBar";
import { useMenuContext } from "../../context/menuContex";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ mainDishes }) => {
  const { showMobileMenu, setShowMobileMenu, hideMobileMenuIcon } =
    useMenuContext();
  const mainDishesRef = useRef();

  const homeNavbarItems = [
    { name: "Menu", path: "/menu", link: true },
    { name: "Platos Destacados", path: "/CHANGETHIS", link: false },
    { name: "Ubicacion", path: "/CHANGETHIS", link: false },
  ];

  return (
    <>
      <header className="home-header">
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
            listItems={homeNavbarItems}
          />
          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="hero"
          >
            <h1 className="title title--home">LA GUACAREÑA</h1>
            <div className="hero-btn-container">
              <Link to="/menu" className="hero__btn">
                Menu
              </Link>
            </div>
          </motion.div>
        </div>

        <button
          className="home-header__goDown"
          onClick={() =>
            mainDishesRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          {" "}
          <i class="fa-solid fa-angle-down "></i>
        </button>
      </header>

      <main>
        <section className="mainDishes" ref={mainDishesRef}>
          <div className="container">
            <h2 className="subtitle subtitle--white">PLATOS DESTACADOS</h2>
            <div className="dishes-images-container">
              {mainDishes.map((dish, index) => {
                return (
                  <Link to={dish.path}>
                    <motion.article
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1, delay: index * 0.25 }}
                      className="mainDish"
                    >
                      <h3 className="mainDish__name">{dish.name}</h3>
                      <img
                        className="mainDish__img"
                        src={dish.imagePath}
                        alt={dish.name}
                      />
                    </motion.article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
