import React, { useEffect } from "react";
import "./pollos.css";
import Gallery from "../../components/gallery/Gallery";
import { useMenuContext } from "../../context/menuContex";
const Pollos = () => {
  const { menuItems } = useMenuContext();
  return (
    <section>
      <h1 className="title">Pollos</h1>
      {menuItems.length > 1 && <Gallery items={menuItems[1].data} />}
    </section>
  );
};

export default Pollos;
