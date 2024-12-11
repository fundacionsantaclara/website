import React from "react";
import "./TallerCarouselTheme.css";
import { useTranslation } from "react-i18next";
import Cuentos from "../Fcimages/Cesc i Clara.jpg";
import Samarreta from "../Fcimages/taller de las nines/colection_la_caixa/Llibre 2.JPG";

function TallerStorybook() {
  const { t } = useTranslation();
  return (
    <div className="SBcard-container">
      <div className="SBcard">
        <div className="SBcard-content">
          <img src={Cuentos} className="SBcard-image" alt="Cuentos" />
          <div className="SBtext-container">
            <h2 className="SBcard-title">{t("taller-storybook-title")}</h2>
            <p
              className="SBcard-description"
              dangerouslySetInnerHTML={{
                __html: t("taller-storybook-para"),
              }}
            ></p>
          </div>
        </div>
      </div>
      <div className="SBcard2">
        <div className="SBcard-content">
          <img src={Samarreta} className="SBcard-image" alt="Samarreta" />
          <div className="SBtext-container">
            <h2 className="SBcard-title">{t("taller-camiseta-title")}</h2>
            <p
              className="SBcard-description"
              dangerouslySetInnerHTML={{
                __html: t("taller-camiseta-para"),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TallerStorybook;
