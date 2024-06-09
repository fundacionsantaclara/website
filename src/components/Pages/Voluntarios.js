import React from "react";
import "./Voluntarios.css";
import compromiso from "../Fcimages/compromiso.png";
import compasion from "../Fcimages/compasion.png";
import teamwork from "../Fcimages/teamwork.png";
import collage1 from "../Fcimages/teamwork.png";
import collage2 from "../Fcimages/teamwork.png";
import collage3 from "../Fcimages/teamwork.png";
import collage4 from "../Fcimages/teamwork.png";
import { useTranslation } from "react-i18next";

function Voluntarios() {
  const { t } = useTranslation();
  return (
    <>
      <div className="voluntario-container">
        <h1 className="voluntario-title">{t("voluntarios")}</h1>

        <div className="voluntario-para-section">
          <p>{t("vol-text")}</p>
          <p>{t("vol-text2")}</p>
        </div>

        <div className="voluntario-card-section">
          <div className="voluntario-card">
            <img
              src={compromiso}
              alt="Card 1"
              className="voluntario-card-image"
            />
            <h3 className="voluntario-card-title">
              <strong>{t("compromiso")}</strong>
            </h3>
            <p className="voluntario-card-description">{t("comp-text")}</p>
          </div>

          <div className="voluntario-card">
            <img
              src={compasion}
              alt="Card 2"
              className="voluntario-card-image"
            />
            <h3 className="voluntario-card-title">
              <strong>{t("compasion")}</strong>
            </h3>
            <p className="voluntario-card-description">{t("compa-text")}</p>
          </div>

          <div className="voluntario-card">
            <img
              src={teamwork}
              alt="Card 3"
              className="voluntario-card-image"
            />
            <h3 className="voluntario-card-title">
              <strong>{t("team")}</strong>
            </h3>
            <p className="voluntario-card-description">{t("team-text")}</p>
          </div>
        </div>
        <div class="voluntario-collage">
          <img src={collage1} alt="Image 1" />
          <img src={collage2} alt="Image 2" />
          <img src={collage3} alt="Image 3" />
          <img src={collage4} alt="Image 4" />
        </div>
      </div>
    </>
  );
}

export default Voluntarios;
