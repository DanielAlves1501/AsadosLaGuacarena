import React, { useContext, useEffect } from "react";
import "./parrillas.css";
import Gallery from "../../components/gallery/Gallery";
import { useMenuContext } from "../../context/menuContex";
import { getMenuItem } from "../../utils/getMenuItem";

const Parrillas = () => {
  const { menuItems } = useMenuContext();

  return (
    <section>
      <h1 className="title">Pan</h1>
      {menuItems.length > 1 && <Gallery items={menuItems[0].data} />}
    </section>
  );
};

export default Parrillas;
