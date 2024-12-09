import React from "react";
import "./Comunidad.css";
import { useTranslation } from "react-i18next";
import imgCard6 from "../Fcimages/comunidad/IMG_8314.jpg";
import imgCard7 from "../Fcimages/comunidad/1624ee0e-653d-4e27-8e86-4faa41cfd17e.jpg";
import imgCard8 from "../Fcimages/comunidad/IMG_7508.jpg";


function Comunidad() {
  const { t } = useTranslation();
  
  return (
    <>
      <div>
        <div className="comunidad section__padding">
        <div className="comunidad-header">
                <h1 className="comunidad-section__title text__cap">
                  {t("comunidad-page-title")}
                </h1>
              </div>
          <div className="comunidad-container">
            <div className="comunidad__content text__center">
             
              

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
          
              {/* Nueva Imagen entre el Título y las Cards */}
              <div className="comunidad-header-image-container">
                <img 
                  src={t("comunidad-page-header-img-url")} 
                  alt="Imagen de Introducción de Comunidad" 
                  className="comunidad-header-image" 
                />
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

            <div className="comunidad-card mb-3">
        <img
          src={imgCard6}
          className="comunidad-card-img-top"
          alt="Imagen de Comunidad 1"
        />
        <div className="comunidad-card-body">
          <h4 className="comunidad-card-title">{t("comunidad-page-card6-title")}</h4>
          <p className="comunidad-card-text">{t("comunidad-page-card6-para1")}</p>
          <p className="comunidad-card-text">{t("comunidad-page-card6-para2")}</p>
          <p className="comunidad-card-text">{t("comunidad-page-card6-para3")}</p>
          <p className="comunidad-card-text">{t("comunidad-page-card6-para4")}</p>
        </div>
      </div>

      <div className="comunidad-card mb-3">
        <img
          src={imgCard7}
          className="comunidad-card-img-top"
          alt="Imagen de Comunidad 2"
        />
        <div className="comunidad-card-body">
          <h4 className="comunidad-card-title">{t("comunidad-page-card7-title")}</h4>
          <p className="comunidad-card-text">{t("comunidad-page-card7-para1")}</p>
          <p className="comunidad-card-text">{t("comunidad-page-card7-para2")}</p>
          <p className="comunidad-card-text">{t("comunidad-page-card7-para3")}</p>
        </div>
      </div>

      <div className="comunidad-card mb-3">
        <img
          src={imgCard8}
          className="comunidad-card-img-top"
          alt="Imagen de Comunidad 3"
        />
        <div className="comunidad-card-body">
          <h4 className="comunidad-card-title">{t("comunidad-page-card8-title")}</h4>
          <p className="comunidad-card-text">{t("comunidad-page-card8-para1")}</p>
          <p className="comunidad-card-text">{t("comunidad-page-card8-para2")}</p>
          <p
            className="comunidad-card-text"
            dangerouslySetInnerHTML={{ __html: t("comunidad-page-card8-para3") }}
          ></p>
          <p
            className="comunidad-card-text"
            dangerouslySetInnerHTML={{ __html: t("comunidad-page-card8-para4") }}
          ></p>
        </div>
      </div>
            
          </div>




          
        </div>
      </div>
    </>
  );
}

export default Comunidad;
