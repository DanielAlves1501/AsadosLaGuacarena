import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import NavBar from "../../components/navBar/NavBar";
import { useMenuContext } from "../../context/menuContex";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import menu from "/menu.pdf";

const Home = ({ mainDishes }) => {
  const { showMobileMenu, setShowMobileMenu, hideMobileMenuIcon } =
    useMenuContext();
  const mainDishesRef = useRef();
  const locationRef = useRef();

  const homeNavbarItems = [
    { name: "Menu", path: menu, link: false, target: "_blank" },
    {
      name: "Platos Destacados",
      path: "#",
      link: false,
      onClick: () =>
        mainDishesRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    { name: "Imagenes", path: "/imagenes/parrillas", link: true },

    {
      name: "Ubicacion",
      path: "#",
      link: false,
      onClick: () => locationRef.current.scrollIntoView({ behavior: "smooth" }),
    },
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
              <a href={menu} target="_blank" className="hero__btn">
                Menu
              </a>
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
        <section
          className="mainDishes"
          id="platosDestacados"
          ref={mainDishesRef}
        >
          <div className="container">
            <h2 className="subtitle subtitle--white">PLATOS DESTACADOS</h2>
            <div className="dishes-images-container">
              {mainDishes.map((dish, index) => {
                return (
                  <Link to={dish.path} className="mainDish">
                    <motion.article
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.25 }}
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
        <section className="location" ref={locationRef}>
          <h2 className="subtitle">UBICACIÓN</h2>
          <p className="description">
            <i class="fa-solid fa-location-dot"></i> Estamos ubicados en la
            Avenida Bolivar Local 103 Sector Guacara, Carabobo, Zona Postal
            2015, en diagonal a Pirelli
          </p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.4751599568262!2d-67.8827982!3d10.223207899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e804248685a6983%3A0x5632e3df91375a8!2sRestaurant%20La%20Guacare%C3%B1a!5e0!3m2!1ses!2sve!4v1714492223904!5m2!1ses!2sve"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-info">
            <div className="footer-contact">
              <h4 className="footer__subtitle">Contacto</h4>
              <span className="footer__description ">
                <i class="fa-brands fa-whatsapp footer__icon footer__icon-whatsapp"></i>{" "}
                Telefono: 0424-4466994
              </span>
              <br />
              <span className="footer__description ">
                <i class="fa-solid fa-motorcycle footer__icon footer__icon-delivery"></i>
                Delivery: 0424-4407611
              </span>
            </div>

            <div className="footer-social">
              <h4 className="footer__subtitle">Redes Sociales</h4>
              <span className="footer__description  ">
                <i class="fa-brands fa-whatsapp footer__icon footer__icon-whatsapp"></i>
                0424-4466994
              </span>
              <br />
              <a
                href="https://www.instagram.com/asadoslaguacarena/?hl=es"
                target="_blank"
                className="footer__description"
              >
                <i class="fa-brands fa-instagram footer__icon footer__icon-instagram"></i>
                @asadoslaguacarena
              </a>
              <br />
              <a
                href="https://www.facebook.com/profile.php?id=100063767852983"
                target="_blank"
                className="footer__description  "
              >
                <i class="fa-brands fa-facebook footer__icon footer__icon-facebook"></i>
                asadoslaguacarena
              </a>
            </div>

            <div className="footer-location">
              <h4 className="footer__subtitle">Ubicación</h4>
              <p className="footer__description">
                Avenida Bolivar Local 103 Sector Guacara, Carabobo, Zona Postal
                2015, diagonal a Pirelli
              </p>
            </div>
          </div>
          <p className="copyright">
            Copyright © 2024 Las Vegas Bar Restaurant Marisqueria C.A. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
