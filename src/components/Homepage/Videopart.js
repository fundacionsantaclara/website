import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import misa from "../../Images/EVENTO SAGRADA FAMILIA 2023-104.jpg";
import misa2 from "../../Images/Libro2.jpg";
import misa3 from "../../Images/ucrania.jpg";
import misa4 from "../../Images/ucrania6.jpg";
import "./Videopart.css";

const Videopart = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed in milliseconds
  };

  // Imágenes del carrusel
  const carouselImages = [misa, misa2, misa3, misa4];

  return (
    <div className="video-page-container">
      {/* Contenedor de la imagen de fondo con el texto */}
      <div className="text-background-section">
        <div className="text-section">
          <h2 className="help-title">{t('videoPage.title')}</h2>
          <ul className="help-list">
            <li>{t('videoPage.infancias')}</li>
            <li>{t('videoPage.alimentos')}</li>
            <li>{t('videoPage.pisosDeAcogida')}</li>
            <li>{t('videoPage.refugiadosYHeridos')}</li>
            <li>{t('videoPage.regularizacionDePapeles')}</li>
          
          </ul>
        </div>
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