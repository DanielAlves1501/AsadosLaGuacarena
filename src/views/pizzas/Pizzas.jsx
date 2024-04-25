import React from "react";
import "./pizzas.css";
import { useMenuContext } from "../../context/menuContex";
import Gallery from "../../components/gallery/Gallery";
const Pizzas = () => {
  const { menuItems } = useMenuContext();

  return (
    <section>
      <h1 className="title">Pizzas</h1>
      {menuItems.length > 1 && <Gallery items={menuItems[2].data} />}
    </section>
  );
};

export default Pizzas;
