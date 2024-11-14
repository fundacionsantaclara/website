import React from "react";
import "./Comunidad.css";
import { useTranslation } from "react-i18next";

function Comunidad() {
  const { t } = useTranslation();
  
  return (
    <>
      <div>
        <div className="comunidad section__padding">
          <div className="comunidad-container">
            <div className="comunidad__content text__center">
              <div className="comunidad-header">
                <h1 className="comunidad-section__title text__cap">
                  {t("comunidad-page-title")}
                </h1>
              </div>
              
              {/* Nueva Imagen entre el Título y las Cards */}
              <div className="comunidad-header-image-container">
                <img 
                  src={t("comunidad-page-header-img-url")} 
                  alt="Imagen de Introducción de Comunidad" 
                  className="comunidad-header-image" 
                />
              </div>

              <div className="comunidad-intro-card-container">
                <div className="comunidad-intro-card">
                  <h2>{t("comunidad-page-card1-title")}</h2>
                  <p>{t("comunidad-page-card1-para")}</p>
                </div>
                <div className="comunidad-intro-card">
                  <h2>{t("comunidad-page-card2-title")}</h2>
                  <p>{t("comunidad-page-card2-para")}</p>
                </div>
                <div className="comunidad-intro-card">
                  <h2>{t("comunidad-page-card3-title")}</h2>
                  <p>{t("comunidad-page-card3-para")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Comunidad-card-container">
            <div className="comunidad-card mb-3">
              <img src={t("comunidad-page-card4-img-url")} className="comunidad-card-img-top" alt="Imagen de Comunidad 1" />
              <div className="comunidad-card-body">
                <h4 className="comunidad-card-title">{t("comunidad-page-card4-title")}</h4>
                <p className="comunidad-card-text">{t("comunidad-page-card4-para")}</p>
              </div>
            </div>
            <div className="comunidad-card mb-3">
              <div className="comunidad-card-body">
                <h4 className="comunidad-card-title">{t("comunidad-page-card5-title")}</h4>
                <p className="comunidad-card-text">{t("comunidad-page-card5-para")}</p>
              </div>
              <img src={t("comunidad-page-card5-img-url")} className="comunidad-card-img-top2" alt="Imagen de Comunidad 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comunidad;
