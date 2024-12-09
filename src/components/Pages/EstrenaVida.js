import React from "react";
import "./EstrenaVida.css"; 
import { useTranslation } from "react-i18next";
import headerImg from "../Fcimages/estrena vida/IMG-20241201-WA0026.jpg";
import imgCard4 from "../Fcimages/estrena vida/IMG-20241201-WA0033.jpg";
import imgCard5 from "../Fcimages/estrena vida/IMG-20241201-WA0040.jpg";

function EstrenaVida() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="estrena-vida section__padding">
          <div className="estrena-vida-container">
            <div className="estrena-vida__content text__center">
              <div className="estrena-vida-header">
                <h1 className="estrena-vida-section__title text__cap">
                  {t("estrenaVida-page-title")}
                </h1>
              </div>
              
              <div className="estrena-vida-text-container text__center">
                <p className="estrena-vida__text text__grey">
                  {t("estrenaVida-page-intro")}
                </p>
              </div>

              <div className="estrena-vida-intro-card-container">
                <div className="estrena-vida-intro-card">
                  <h2>{t("estrenaVida-page-card1-title")}</h2>
                  <p>{t("estrenaVida-page-card1-para")}</p>
                </div>
                <div className="estrena-vida-intro-card">
                  <h2>{t("estrenaVida-page-card2-title")}</h2>
                  <p>{t("estrenaVida-page-card2-para")}</p>
                </div>
                <div className="estrena-vida-intro-card">
                  <h2>{t("estrenaVida-page-card3-title")}</h2>
                  <p>{t("estrenaVida-page-card3-para")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header Image Section */}
          <div className="estrena-vida-header-image-container">
            <img 
              src={headerImg} 
              alt="Imagen de Introducción de Estrena Vida" 
              className="estrena-vida-header-image" 
            />
          </div>

          {/* Card Section */}
          <div className="estrena-vida-card-container">
            <div className="estrena-vida-card mb-3">
              <img src={imgCard4} className="estrena-vida-card-img-top" alt="Imagen de Estrena Vida 1" />
              <div className="estrena-vida-card-body">
                <h4 className="estrena-vida-card-title">{t("estrenaVida-page-card4-title")}</h4>
                <p className="estrena-vida-card-text">{t("estrenaVida-page-card4-para")}</p>
              </div>
            </div>
            <div className="estrena-vida-card mb-3">
              <div className="estrena-vida-card-body">
                <h4 className="estrena-vida-card-title">{t("estrenaVida-page-card5-title")}</h4>
                <p className="estrena-vida-card-text">{t("estrenaVida-page-card5-para")}</p>
              </div>
              <img src={imgCard5} className="estrena-vida-card-img-top2" alt="Imagen de Estrena Vida 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EstrenaVida;
