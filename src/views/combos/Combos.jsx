import React from "react";
import "./combos.css";
import { useMenuContext } from "../../context/menuContex";
import Gallery from "../../components/gallery/Gallery";
const Combos = () => {
  const { menuItems } = useMenuContext();

  return (
    <section>
      <h1 className="title">Combos</h1>
      {menuItems.length > 1 && <Gallery items={menuItems[6].data} />}
    </section>
  );
};

export default Combos;
