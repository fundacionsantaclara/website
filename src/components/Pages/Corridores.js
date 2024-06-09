import React from "react";
import "./Corridores.css";
import Ambulancias from "../Fcimages/ambulancia.jpg";
import Ucrania from "../Fcimages/ucrania.png";
import Generadores from "../Fcimages/generadores.jpg";
import Bizzum from "../Fcimages/bizzum.jpg";
import { useTranslation } from "react-i18next";

function Corridores() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="corridores section__padding">
        <div className="corridores-container">
          <div className="corridores__content text__center">
            <div className="corridores-header">
              <h1 className="corridores-section__title text__cap">
                {t("corredores")}
              </h1>
            </div>
            <p className="corridores__text text__grey">
              {t("corredores-text")}
            </p>
            <div>
              <div className="reto-container">
                <div class="reto-card">
                  <h2>{t("reto")}</h2>
                  <img src={Bizzum} class="reto-img" alt="..." />
                  <div class="ucrania-part2-card-content"></div>
                </div>
              </div>
              <div className="ucrania-Part2-container">
                <div class="ucrania-part2-card">
                  <h2> {t("corredores")}</h2>
                  <div class="ucrania-part2-card-content">
                    <p>
                      {t("corredores-p")}
                      <strong> {t("corredores-strong")}</strong>
                    </p>
                  </div>
                </div>
                <div class="ucrania-part2-card">
                  <h2> {t("acogida")}</h2>
                  <div class="ucrania-part2-card-content">
                    <p>
                      {t("acogida-text")}
                      <strong> {t("acogida-strong")}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="corridores-img-part">
                <img src={Ambulancias} class="corridores-card-img1" alt="..." />
                <img src={Ucrania} class="corridores-card-img2" alt="..." />
                <img src={Generadores} class="corridores-card-img1" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corridores;
