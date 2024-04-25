import React from "react";
import "./hamburguesas.css";
import { useMenuContext } from "../../context/menuContex";
import Gallery from "../../components/gallery/Gallery";
const Hamburguesas = () => {
  const { menuItems } = useMenuContext();

  return (
    <section>
      <h1 className="title">Hamburguesas</h1>
      {menuItems.length > 1 && <Gallery items={menuItems[4].data} />}
    </section>
  );
};

export default Hamburguesas;
