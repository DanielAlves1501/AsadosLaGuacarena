import React, { useState } from "react";
import "./foodCard.css";
import { ColorRing } from "react-loader-spinner";

const FoodCard = ({ item }) => {
  const [loader, setLoader] = useState(true);

  return (
    <div className="gallery__image">
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
      />
    </div>
  );
};

export default FoodCard;
