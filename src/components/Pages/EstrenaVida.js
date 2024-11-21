import React from "react";
import "./EstrenaVida.css"; // Archivo CSS para personalizar la nueva página
import { useTranslation } from "react-i18next";

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
              
             

              <div className="estrena-vida-intro-card-container">
                <div className="estrena-vida-intro-card">
                  <h2>{t("estrenaVida-page-card1-title")}</h2>
                  <p>{t("estrenaVida-page-card1-para")}</p>
                </div>
                <div className="estrena-vida-intro-card">
                  <h2>{t("estrenaVida-page-card2-title")}</h2>
                  <p>{t("estrenaVida-page-card2-para")}</p>
                </div>
            
              </div>
            </div>
          </div>

         {/* Nueva Imagen entre el Título y las Cards */}
         <div className="estrena-vida-header-image-container">
                <img 
                  src={t("estrenaVida-page-header-img-url")} 
                  alt="Imagen de Introducción de Estrena Vida" 
                  className="estrena-vida-header-image" 
                />
              </div>


          <div className="estrena-vida-card-container">
            <div className="estrena-vida-card mb-3">
              <img src={t("estrenaVida-page-card4-img-url")} className="estrena-vida-card-img-top" alt="Imagen de Estrena Vida 1" />
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
              <img src={t("estrenaVida-page-card5-img-url")} className="estrena-vida-card-img-top2" alt="Imagen de Estrena Vida 2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}export default EstrenaVida;