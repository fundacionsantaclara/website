import React from "react";
import "./Duchas.css";
import { useTranslation } from "react-i18next";
import Installation from "../Fcimages/public.jpg";
import Ropero from "../Fcimages/clothes.jpg";
import NGO from "../Fcimages/ngo.jpg";

function Duchas() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="duchas section__padding">
        <div className="duchas-container">
          <div className="duchas__content text__center">
            <div className="duchas-header">
              <h1 className="section__title text__cap">
                {t("duchas-page-title")}
              </h1>
            </div>
            <div></div>

            <div class="duchas-intro-card">
              <div class="duchas-intro-card-content">
                <h2>{t("duchas-intro-title")}</h2>
                <p>
                  {t("duchas-intro-para")}
                  <strong> {t("duchas-intro-para-bold")}</strong>
                </p>
              </div>
            </div>
            <div className="Part2-container">
              <div class="part2-card">
                <h2>{t("duchas-card1-title")}</h2>
                <img src={Installation} alt="Instalaciones" />
                <div class="part2-card-content">
                  <p>
                    {t("duchas-card1-para")}
                    <strong>{t("duchas-card1-para-bold")}</strong>
                  </p>
                </div>
              </div>

              <div class="part2-card">
                <h2> {t("duchas-card2-title")}</h2>
                <img src={Ropero} alt="Instalaciones" />
                <div class="part2-card-content">
                  <p>
                    {t("duchas-card2-para")}
                    <strong>{t("duchas-card2-para-bold")}</strong>
                  </p>
                </div>
              </div>

              <div class="part2-card">
                <h2>{t("duchas-card3-title")}</h2>
                <img src={NGO} alt="Instalaciones" />
                <div class="part2-card-content">
                  <p>
                    {t("duchas-card3-para")}
                    <strong>{t("duchas-card3-para-bold")}</strong> o a través de
                    {t("duchas-card3-para2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Duchas;
