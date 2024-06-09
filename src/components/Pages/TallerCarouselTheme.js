import React from "react";
import "./TallerCarouselTheme.css";
import TallerCarouselcard from "./TallerCarouselcard";
import Coleccion from "../Fcimages/coleccion 3.jpg";
import Coleccion2 from "../Fcimages/coleccion deporte.jpg";
import Coleccion3 from "../Fcimages/coleccion escolar.jpg";
import Coleccion4 from "../Fcimages/coleccion fiesta.jpg";
import Coleccion5 from "../Fcimages/coleccion policia.jpg";
import Coleccion6 from "../Fcimages/coleccion rurales.jpg";
import Coleccion7 from "../Fcimages/coleccion vintage.jpg";
import Coleccion8 from "../Fcimages/coleccion green.jpg";
import Coleccion9 from "../Fcimages/coleccion enfermera.jpg";

function TallerCarouselTheme() {
  const TCcardData = [
    { title: "Colección Casual", image: Coleccion },
    { title: "Colección Deportista", image: Coleccion2 },
    { title: "Colección Escolares", image: Coleccion3 },
    { title: "Colección Fiesta", image: Coleccion4 },
    { title: "Colección Seguridad", image: Coleccion5 },
    { title: "Colección Rurales", image: Coleccion6 },
    { title: "Colección Vintage", image: Coleccion7 },
    { title: "Colección Green", image: Coleccion8 },
    { title: "Colección Enfermería", image: Coleccion9 },
  ];

  return (
    <div className="TCcard-container">
      <div className="TCcards-wrapper">
        {TCcardData.map((card, index) => (
          <TallerCarouselcard
            key={index}
            title={card.title}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default TallerCarouselTheme;
