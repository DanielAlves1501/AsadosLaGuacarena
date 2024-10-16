import React from "react";
import "./platosChef.css";
import { useMenuContext } from "../../context/menuContex";
import Gallery from "../../components/gallery/Gallery";
const PlatosChef = () => {
  const { menuItems } = useMenuContext();

  return (
    <section>
      <h1 className="title">Platos Chef</h1>
      {menuItems.length > 1 && <Gallery items={menuItems[3].data} />}
    </section>
  );
};

export default PlatosChef;
