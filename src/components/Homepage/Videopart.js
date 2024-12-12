import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import infancia1 from "../Fcimages/carruselhome/IMG_6650.jpg";
import infancia3 from "../Fcimages/carruselhome/IMG_8015.jpg";
import infancia4 from "../Fcimages/carruselhome/Captura de pantalla 2024-12-05 100810.png";
import infancia5 from "../Fcimages/carruselhome/IMG-20230726-WA0029.jpg";
import alimentos1 from "../Fcimages/carruselhome/IMG_5657.jpg";
import alimentos2 from "../Fcimages/carruselhome/IMG_1305.jpg";
import alimentos5 from "../Fcimages/carruselhome/IMG_6305.jpg";
import yosoy1 from "../Fcimages/carruselhome/IMG_5229.jpg";
import yosoy2 from "../Fcimages/carruselhome/IMG_6357.jpg";
import refugiados1 from "../Fcimages/carruselhome/250ucranianos.png";
import refugiados2 from "../Fcimages/carruselhome/Voluntariado_Caixabank_Polonia.jpg";
import refugiados4 from "../Fcimages/carruselhome/IMG_1923.jpg";
import refugiados5 from "../Fcimages/carruselhome/IMG_1905.jpg";
import refugiados6 from "../Fcimages/carruselhome/IMG_6456.jpg";
import refugiados7 from "../Fcimages/carruselhome/pickups_1.jpg";
import CounterCircle from "./CounterCircle";
import { useTranslation } from "react-i18next";

import "./Videopart.css";

//const foto = require('../Fcimages/carruselhome/IMG_0249.jpg');
const Videopart = () => {
  const { t } = useTranslation();
  
  const data = [
    { label: t("videoPage.infancias"), value: 600 },
    { label: t("videoPage.alimentos"), value: 500 


     },
    { label:  t("videoPage.pisosDeAcogida"), value: 50 },
    { label:  t("videoPage.refugiadosYHeridos"), value: 89 },
    { label: t("videoPage.regularizacionDePapeles"), value: 110 },
  ];
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
  const carouselImages = [infancia1, alimentos1, refugiados2, refugiados1,yosoy1 ,  infancia3,alimentos2, yosoy2,infancia4, refugiados4,refugiados5,infancia5,refugiados6, alimentos5, refugiados7 ];

  return (
    <div className="main-section">
      <h1>{t("videoPage.title")}</h1>
      <div className="video-page-container">
        <div className="main-container">
          <div className="circle-container">
            {data.map((item, index) => (
              <CounterCircle key={index} label={item.label} value={item.value} />
            ))}
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
    </div>
 
  );
};
export default Videopart;