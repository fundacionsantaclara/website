import React from "react";
import "./TallerCarouselTheme.css";
import TallerCarouselcard from "./TallerCarouselcard";
import Coleccion from "../Fcimages/taller de las nines/coletcio_baxi/Cole Baxi 1.jpg";
import Coleccion2 from "../Fcimages/taller de las nines/coletcio_baxi/Cole Baxi 2.jpg";
import Coleccion3 from "../Fcimages/taller de las nines/coletcio_baxi/Cole Baxi 3.jpg";
import Coleccion4 from "../Fcimages/taller de las nines/colection_crochet/Coleccion Crochet 1.jpg";
import Coleccion5 from "../Fcimages/taller de las nines/colection_crochet/Colección Crochete 2.jpg";


function TallerCarouselTheme() {
  const TCcardData = [
    { title:"Colección Baxi Manresa", image: Coleccion },
    { title: "Colección Baxi Manresa", image: Coleccion2 },
    { title: "Colección Baxi Manresa", image: Coleccion3 },
    { title: "Colección Crochet", image: Coleccion4 },
    { title: "Colección Crochet", image: Coleccion5 },
   
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
