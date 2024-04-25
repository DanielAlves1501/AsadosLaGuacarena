import React, { useState } from "react";
import "./foodCard.css";
import { ColorRing } from "react-loader-spinner";
import { useMenuContext } from "../../context/menuContex";

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
      <h2 className="gallery-image__title">{item.name}</h2>
      {loader && (
        <ColorRing
          visible={true}
          height={80}
          width={80}
          ariaLabel="color-ring-loading"
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
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
