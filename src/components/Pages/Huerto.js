import React from "react";
import "./Huerto.css";
import { useTranslation } from "react-i18next";
import huertopic1 from "../Fcimages/Huertos egologícos/WhatsApp Image 2024-10-24 at 16.00.02 (2).jpeg";
import huertopic2 from "../Fcimages/Huertos egologícos/WhatsApp Image 2024-10-24 at 16.00.03.jpeg";
import huertopic3 from "../Fcimages/Huertos egologícos/WhatsApp Image 2024-10-24 at 16.00.03 (1).jpeg";
import huertopic4 from "../Fcimages/Huertos egologícos/WhatsApp Image 2024-10-24 at 16.00.04 (1).jpeg";
import huertopic5 from "../Fcimages/Huertos egologícos/20240628_100938.jpg";
import huertopic6 from "../Fcimages/Huertos egologícos/20230311_114735.jpg";

function Huerto() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="huerto-header">
        <h1 className="huerto-section__title text__cap">
          {t("huerto-page-title")}
        </h1>
      </div>
      <div className="huerto section__padding">
        <div className="huerto-container">
          <div className="huerto__content text__center">
            <div className="huerto-para">
              <p className="huerto__text text__grey">
                {t("huerto-page-para1")}
              </p>
              
            </div>
          </div>
        </div>

        {/* Generic Intro Card Section */}
        <div className="generic-intro-card-container">
          <div className="generic-intro-card">
            <h2>{t("generic-page-intro-card1-title")}</h2>
            <p>{t("generic-page-intro-card1-para")}</p>
          </div>
          <div className="generic-intro-card">
            <h2>{t("generic-page-intro-card2-title")}</h2>
            <p>{t("generic-page-intro-card2-para")}</p>
          </div>
          <div className="generic-intro-card">
            <h2>{t("generic-page-intro-card3-title")}</h2>
            <p>{t("generic-page-intro-card3-para")}</p>
          </div>
        </div>

        <div className="huerto-image-container">
          <div className="huerto-pic">
            <img src={huertopic1} alt="img 1" />
            <img src={huertopic3} alt="img 2" />
            <img src={huertopic2} alt="img 3" />
            <img src={huertopic4} alt="img 4" />
            <img src={huertopic5} alt="img 4" />
            <img src={huertopic6} alt="img 4" />
          </div>
        </div>

        {/* Generic Card Section to other projects */}
        <div className="generic-card mb-3">
  <img 
    src={require("../Fcimages/Huertos egologícos/amburnia/20241205_103434.jpg")} 
    className="generic-card-img-top" 
    alt="Imagen genérica" 
  />
  <div className="generic-card-body">
    <h4 className="generic-card-title">{t("generic-page-card-title")}</h4>
    <p className="generic-card-text">{t("generic-page-card-para")}</p>
  </div>
</div>

        
      </div>
    </div>
  );
}

export default Huerto;