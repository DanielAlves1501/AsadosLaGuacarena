import React from "react";
import "./notFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <div className="container">
        <h1 className="title">Algo salió mal!</h1>
        <p className="description">
          Lo sentimos, la página que estás buscando no pudo ser encontrada.
        </p>
        <p className="description">
          <a href="/">Volver a la página principal</a>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
