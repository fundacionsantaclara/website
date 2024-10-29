import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import esImage from "../../Images/infoCastellano.png"
import caImage from "../../Images/infoCatalan.png"
import enImage from "../../Images/infoEnglish.png"
import misa from "../../Images/EVENTO SAGRADA FAMILIA 2023-104.jpg";
import misa2 from "../../Images/Libro2.jpg";
import misa3 from "../../Images/ucrania.jpg";
import misa4 from "../../Images/ucrania6.jpg";

import "./Videopart.css";

const Videopart = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed in milliseconds
  };

   // Selección de imagen estática según el idioma
   const staticImage =
   currentLanguage === "es"
     ? esImage
     : currentLanguage === "ca"
     ? caImage
     : enImage;

 // Imágenes del carrusel
 const carouselImages = [misa, misa2, misa3, misa4];

  return (
    <div className="video-page-container">
    {/* Contenedor de la imagen que cambia según el idioma */}
    <div className="video-section">
      <img src={staticImage} alt="Idioma seleccionado" width="100%" height="100%" />
    </div>

      {/* Contenedor del carrusel */}
      <div className="slideshow-section">
        <Slider {...settings}>
          {carouselImages.map((imgSrc, index) => (
            <div className="slide" key={index}>
              <img src={imgSrc} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Videopart;
