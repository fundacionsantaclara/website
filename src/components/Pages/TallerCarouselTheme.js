import React from "react";
import "./TallerCarouselTheme.css";
import { useTranslation } from "react-i18next";
import TallerCarouselcard from "./TallerCarouselcard";

// Importación de imágenes
import Coleccion from "../Fcimages/taller de las nines/coletcio_baxi/Cole Baxi 1.jpg";
import Coleccion2 from "../Fcimages/taller de las nines/coletcio_baxi/Cole Baxi 2.jpg";
import Coleccion3 from "../Fcimages/taller de las nines/coletcio_baxi/Cole Baxi 3.jpg";
import Coleccion4 from "../Fcimages/taller de las nines/colection_crochet/Coleccion Crochet 1.jpg";
import Coleccion5 from "../Fcimages/taller de las nines/colection_crochet/Colección Crochete 2.jpg";
import Coleccion6 from "../Fcimages/taller de las nines/colection_collage/Coleccion Colege 1.jpg";
import Coleccion7 from "../Fcimages/taller de las nines/colection_collage/TALLER 2.jpg";
import Coleccion8 from "../Fcimages/taller de las nines/colection_la_caixa/Coleccio La Caixa 1.jpg";
import Coleccion9 from "../Fcimages/taller de las nines/colection_la_caixa/Colecció La Caixa 2.jpg";
import Coleccion10 from "../Fcimages/taller de las nines/colection_la_caixa/Colecció la Caixa 3.jpg";
import Coleccion11 from "../Fcimages/taller de las nines/Coleccio La Caixa 4.jpg";
import Coleccion12 from "../Fcimages/taller de las nines/colection_nadal/Colecció Nadal 2.jpg";
import Coleccion13 from "../Fcimages/taller de las nines/colection_nadal/Colecció Nadal 4.jpg";
import Coleccion14 from "../Fcimages/taller de las nines/colection_nadal/Colecció Nadal 5.jpg";
import Coleccion15 from "../Fcimages/taller de las nines/colection_nadal/Coleccio Nadal 1.JPG";
import Coleccion16 from "../Fcimages/taller de las nines/colection_nadal/Colecció Nadal 3.JPG";
import Coleccion18 from "../Fcimages/taller de las nines/colection_vichy/Coleccio Vichy 1.jpg";
import Coleccion19 from "../Fcimages/taller de las nines/colection_vichy/Coleccio Vichy 3.jpg";
import Coleccion20 from "../Fcimages/taller de las nines/colection_vichy/Coleccio Vichy 2.JPG";
import Coleccion21 from "../Fcimages/taller de las nines/TALLER 1.jpg";

function TallerCarouselTheme() {
  const { t } = useTranslation(); // Hook para obtener traducciones

  // Datos del carrusel con traducciones dinámicas
  const TCcardData = [
    { title: t("coleccion_baxi"), image: Coleccion },
    { title: t("coleccion_baxi"), image: Coleccion2 },
    { title: t("coleccion_baxi"), image: Coleccion3 },
    { title: t("coleccion_crochet"), image: Coleccion4 },
    { title: t("coleccion_crochet"), image: Coleccion5 },
    { title: t("coleccion_collage"), image: Coleccion6 },
    { title: t("coleccion_collage"), image: Coleccion7 },
    { title: t("coleccion_la_caixa"), image: Coleccion8 },
    { title: t("coleccion_la_caixa"), image: Coleccion9 },
    { title: t("coleccion_la_caixa"), image: Coleccion10 },
    { title: t("coleccion_la_caixa"), image: Coleccion11 },
    { title: t("coleccion_nadal"), image: Coleccion12 },
    { title: t("coleccion_nadal"), image: Coleccion13 },
    { title: t("coleccion_nadal"), image: Coleccion14 },
    { title: t("coleccion_nadal"), image: Coleccion15 },
    { title: t("coleccion_nadal"), image: Coleccion16 },
    { title: t("coleccion_vichy"), image: Coleccion18 },
    { title: t("coleccion_vichy"), image: Coleccion19 },
    { title: t("coleccion_vichy"), image: Coleccion20 },
    { title: t("coleccion_taller"), image: Coleccion21 },
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