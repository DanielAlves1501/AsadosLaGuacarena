import React from "react";
import "./gallery.css";
import FoodCard from "../foodCard/FoodCard";
const Gallery = ({ items }) => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <FoodCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Gallery;
