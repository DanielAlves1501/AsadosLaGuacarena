import React from "react";
import "./modal.css";
import FoodCard from "../foodCard/FoodCard";
import { useMenuContext } from "../../context/menuContex";

const Modal = () => {
  const { selectedDish, showModal, setShowModal } = useMenuContext();
  return (
    <section className={`modal ${showModal && "modal--show"}`}>
      <span className="modal__delete-icon" onClick={() => setShowModal(false)}>
        X
      </span>
      <div className="modal__black-opacity"></div>
      <div className="modal-info-container">
        <FoodCard item={selectedDish} />
      </div>
    </section>
  );
};

export default Modal;
