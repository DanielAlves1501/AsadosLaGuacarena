import React from "react";
import "./postres.css";
import { useMenuContext } from "../../context/menuContex";
import Gallery from "../../components/gallery/Gallery";
const Postres = () => {
  const { menuItems } = useMenuContext();
  console.log(menuItems);
  return (
    <section>
      <h1 className="title">Postres</h1>
      {menuItems.length > 1 && <Gallery items={menuItems[5].data} />}
    </section>
  );
};

export default Postres;
