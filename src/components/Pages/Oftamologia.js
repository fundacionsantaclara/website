import React from "react";
import "./Oftamologia.css";
import { useTranslation } from "react-i18next";
import Gafas from "../Fcimages/gafas.jpg";
import Usuario from "../Fcimages/oftalmologia/IMG_0957.jpg";
import Usuario1 from "../Fcimages/oftalmologia/IMG_0929.jpg";

function Oftamologia() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="oftamologia section__padding">
        <div className="oftamologia-header">
          <h1 className="ofta-section__title text__cap">
            {t("oftamologia-page-title")}
          </h1>
        </div>
        <div className="oftamologia-container">
          <div className="oftamologia__content text__center"></div>
          <div class="ofta-card">
            <div class="ofta-card-content">
              <h2>{t("oftamologia-intro-title")}</h2>
              <p>{t("oftamologia-intro-para")}</p>
            </div>
          </div>
          <div className="ofta-card2">
            <h2 className="ofta-card2-title">{t("oftamologia-card1-title")}</h2>
            <p className="ofta-card2-description">
              {t("oftamologia-card1-para")}
            </p>
          </div>
          <div className="ofta-card3-container">
            <div className="ofta-card3">
              <h2 className="ofta-card3-title">
                {t("oftamologia-card2-title")}
              </h2>
              <p className="ofta-card3-description">
                {t("oftamologia-card2-para")}
              </p>
              <img src={Gafas} class="gafas-card-img-top" alt="..." />
            </div>{" "}
            <div className="ofta-card3">
              <h2 className="ofta-card3-title">
                {t("oftamologia-card3-title")}
              </h2>
              <p className="ofta-card3-description">
                {t("oftamologia-card3-para")}
              </p>
              <img src={Usuario} class="gafas-card-img-top" alt="..." />
            </div>
            <div className="ofta-card3">
              <h2 className="ofta-card3-title">
                {t("oftamologia-card4-title")}
              </h2>
              <p className="ofta-card4-description">
                {t("oftamologia-card4-para")}
              </p>
              <img src={Usuario1} class="gafas-card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Oftamologia;
