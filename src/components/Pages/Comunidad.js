import React from "react";
import { useTranslation } from "react-i18next";
import "./Comunidad.css";

function Comunidad() {
  const { t } = useTranslation(); // Hook para traducciones
  const comunidadData = t("comunidad", { returnObjects: true });

  return (
    <div className="comunidad-section">
      {/* Título específico para la sección */}
      <h1 className="comunidad-title">{comunidadData.section_title}</h1>

      {/* Imagen principal de la sección */}
      <img
        src={comunidadData.main_image}
        alt="Imagen principal de comunidad"
        className="comunidad-main-image"
      />

      {/* Contenedor de tarjetas */}
      <div className="comunidad-cards-container">
        {comunidadData.cards.map((card, index) => (
          <div key={index} className="comunidad-card">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>

      {/* Galería de imágenes */}
      <div className="comunidad-gallery">
        {comunidadData.gallery_images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Comunidad;
