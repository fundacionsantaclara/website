import React from "react";
import "./Pisos.css";
import { useTranslation } from "react-i18next";
import Apartment from "../Fcimages/apartment.jpg";
import Apartmenttwo from "../Fcimages/apartment2.jpg";

function Pisos() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="piso section__padding">
          <div className="piso-container">
            <div className="piso__content text__center">
              <div className="piso-header">
                <h1 className="piso-section__title text__cap">
                  {t("pisos-page-title")}
                </h1>
              </div>
              <div class="piso-intro-card-container">
                <div class="piso-intro-card">
                  <h2> {t("pisos-page-card1-title")}</h2>
                  <p>{t("pisos-page-card1-para")}</p>
                </div>
                <div class="piso-intro-card">
                  <h2>{t("pisos-page-card2-title")}</h2>
                  <p>{t("pisos-page-card2-para")}</p>
                </div>
                <div class="piso-intro-card">
                  <h2>{t("pisos-page-card3-title")}</h2>
                  <p>{t("pisos-page-card3-para")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Pisos-card-container">
            <div class="pisos-card mb-3">
              <img src={Apartment} class="pisos-card-img-top" alt="..." />
              <div class="pisos-card-body">
                <h4 class="pisos-card-title">{t("pisos-page-card4-title")}</h4>
                <p class="pisos-card-text">{t("pisos-page-card4-para")}</p>
              </div>
            </div>
            <div class="pisos-card mb-3">
              <div class="pisos-card-body">
                <h4 class="pisos-card-title">{t("pisos-page-card5-title")}</h4>
                <p class="pisos-card-text">{t("pisos-page-card5-para")}</p>
              </div>
              <img src={Apartmenttwo} class="pisos-card-img-top2" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pisos;
