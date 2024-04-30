import React, { useState } from "react";
import "./foodCard.css";
import { ColorRing } from "react-loader-spinner";
import { useMenuContext } from "../../context/menuContex";
import Loader from "../loader/Loader";

const FoodCard = ({ item }) => {
  const [loader, setLoader] = useState(true);
  const {
    selectedDish,
    setSelectedDish,
    setShowModal,
    showModal,
    setHideMobileMenuIcon,
    setShowMobileMenu,
  } = useMenuContext();

  return (
    <div className="gallery__image">
      <h3 className="gallery-image__title">{item.name}</h3>
      {loader && <Loader />}
      <img
        src={item.imagePath}
        alt={item.name}
        onLoad={() => setLoader(false)}
        onClick={() => {
          setShowModal(true);
          setSelectedDish(item);
          setHideMobileMenuIcon(true);
          setShowMobileMenu(false);
        }}
      />
    </div>
  );
};

export default FoodCard;
