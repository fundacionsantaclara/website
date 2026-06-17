import React from "react";
import "./Ghana.css";
import InvulnerablePic from "../Fcimages/gh2.jpeg";
import InvulnerablePic1 from "../Fcimages/gh4.jpeg";
import InvulnerableColl from "../Fcimages/gh5.jpeg";
import InvulnerableColl2 from "../Fcimages/gh3.jpeg";
import InvulnerableColl3 from "../Fcimages/gh6.jpeg";
import InvulnerableColl4 from "../Fcimages/gh7.jpg";
import { useTranslation } from "react-i18next";

function Ghana() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="invulnerables section__padding">
        <div className="invulnerables-header">
          <h1 className="invulnerables-section__title text__cap">
            {t("ghana-page-title")}
          </h1>
        </div>
        <div className="invulnerables__content text__center">
          <h2 className="invulnerables__content-title">
            {t("gh-content-title")}
          </h2>
        </div>

        <div className="ghana-container">
          <div className="ghana-hero">
            <img src={InvulnerablePic} alt="Ghana Project" />
            <div className="ghana-hero-content">
              <h2>{t("ghana_education_title")}</h2>
              <p>{t("ghana_education_description")}</p>

              <ul>
                <li>{t("ghana_education_item1")}</li>
                <li>{t("ghana_education_item2")}</li>
                <li>{t("ghana_education_item3")}</li>
                <li>{t("ghana_education_item4")}</li>
              </ul>
            </div>
          </div>

          <div className="ghana-section">
            <div className="ghana-section-content">
              <h2>{t("ghana_health_title")}</h2>
              <p>{t("ghana_health_description")}</p>
            </div>

            <img
              src={InvulnerablePic1}
              alt="Healthcare support"
              className="ghana-section-image"
            />
          </div>
          <div className="ghana-gallery">
            <img src={InvulnerableColl} alt="" />
            <img src={InvulnerableColl2} alt="" />
            <img src={InvulnerableColl3} alt="" />
            <img src={InvulnerableColl4} alt="" />
          </div>

          <div className="ghana-project-card">
            <h2>{t("ghana_future_project")}</h2>
            <h3>{t("ghana_clinic_title")}</h3>

            <p>{t("ghana_clinic_description")}</p>

            <div className="ghana-objectives">
              <h4>{t("ghana_objectives")}</h4>

              <ul>
                <li>{t("ghana_objective_1")}</li>
                <li>{t("ghana_objective_2")}</li>
                <li>{t("ghana_objective_3")}</li>
                <li>{t("ghana_objective_4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ghana;
