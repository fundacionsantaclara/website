import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import infancia1 from "../Fcimages/carruselhome/invul-walking.jpg";
import infancia3 from "../Fcimages/carruselhome/boat.JPG";
import infancia4 from "../Fcimages/carruselhome/Captura de pantalla 2024-12-05 100810.png";
import infancia5 from "../Fcimages/carruselhome/partido-invul.jpeg";
import alimentos1 from "../Fcimages/carruselhome/IMG_5657.jpg";
import alimentos2 from "../Fcimages/carruselhome/IMG_1305.jpg";
import alimentos5 from "../Fcimages/carruselhome/IMG_6305.jpg";
import yosoy1 from "../Fcimages/carruselhome/IMG_5229.jpg";
import yosoy2 from "../Fcimages/carruselhome/IMG_6357.jpg";
// import refugiados1 from "../Fcimages/carruselhome/250ucranianos.png";
import refugiados2 from "../Fcimages/carruselhome/Voluntariado_Caixabank_Polonia.jpg";
// import refugiados4 from "../Fcimages/carruselhome/IMG_1923.jpg";
// import refugiados5 from "../Fcimages/carruselhome/IMG_1905.jpg";
// import refugiados6 from "../Fcimages/carruselhome/IMG_6456.jpg";
import refugiados7 from "../Fcimages/carruselhome/pickups_1.jpg";
import CounterCircle from "./CounterCircle";
import buses from "../Fcimages/NoticiasImages/buses/28-01-2025-DONATION/bus donation 1.jpeg";
import { useTranslation } from "react-i18next";
import sonrisas from "../Fcimages/carruselhome/smile1.jpeg";
import sonrisas2 from "../Fcimages/carruselhome/smile2.jpeg";
import sonrisas3 from "../Fcimages/carruselhome/smile3.jpeg";
import sonrisas4 from "../Fcimages/carruselhome/smile4.jpeg";
import sonrisas5 from "../Fcimages/carruselhome/smile5.jpeg";

import "./Videopart.css";

//const foto = require('../Fcimages/carruselhome/IMG_0249.jpg');
const Videopart = () => {
  const { t } = useTranslation();

  const data = [
    { label: t("videoPage.infancias"), value: 614 },
    { label: t("videoPage.alimentos"), value: 500 },
    { label: t("videoPage.pisosDeAcogida"), value: 52 },
    { label: t("videoPage.refugiadosYHeridos"), value: 89 },
    { label: t("videoPage.regularizacionDePapeles"), value: 110 },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const carouselImages = [
    sonrisas,
    buses,
    infancia1,
    alimentos1,
    refugiados2,
    // refugiados1,
    yosoy1,
    infancia3,
    alimentos2,
    yosoy2,
    infancia4,
    // refugiados4,
    // refugiados5,
    infancia5,
    // refugiados6,
    alimentos5,
    refugiados7,
    sonrisas2,
    sonrisas3,
    sonrisas4,
    sonrisas5,
  ];

  return (
    <div className="main-section">
      <h1>{t("videoPage.title")}</h1>
      <div className="video-page-container">
        <div className="main-container">
          <div className="circle-container">
            {data.map((item, index) => (
              <CounterCircle
                key={index}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>

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
