import React from "react";
import "./Voluntarios.css";
import compromiso from "../Fcimages/voluntarios/00c2ea1f-6916-45a3-8970-2de023d69cff.jpg";
import compasion from "../Fcimages/voluntarios/Captura de pantalla 2024-12-05 100454.png";
import teamwork from "../Fcimages/voluntarios/IMG_0850.jpg";
import collage1 from "../Fcimages/voluntarios/IMG_5695.jpg";
import collage2 from "../Fcimages/voluntarios/IMG_0242.jpg";
import collage3 from "../Fcimages/voluntarios/Captura de pantalla 2024-12-05 100640.png";
import collage4 from "../Fcimages/voluntarios/IMG_5697.jpg";
import collage5 from "../Fcimages/voluntarios/IMG_4482.jpg";
import collage6 from "../Fcimages/voluntarios/IMG_4485.jpg";
import collage7 from "../Fcimages/voluntarios/IMG_7935.jpg";
import collage8 from "../Fcimages/voluntarios/IMG_8937.jpg";
import collage9 from "../Fcimages/voluntarios/IMG_9222.jpg";
import collage10 from "../Fcimages/voluntarios/IMG_8979.jpg";

import { useTranslation } from "react-i18next";

function Voluntarios() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="voluntario-title">{t("voluntarios")}</h1>
      <div className="voluntario-container">
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

        <div className="voluntario-para-section">
          <p>{t("vol-text3")}</p>
          <p>{t("vol-text4")}</p>
          <div className="voluntario-contact">
            <p><strong>{t("Opciones de contacto")}</strong></p>
            <ul className="voluntario-email-list">
              <li>
                <span className="voluntario-email-icon">📧</span>
                <a href="mailto:pilarrov@fsantaclara.org" className="voluntario-email">
                  pilarrov@fsantaclara.org
                </a>
              </li>
              <li>
                <span className="voluntario-email-icon">📧</span>
                <a href="mailto:nuriatatje@fsantaclara.org" className="voluntario-email">
                  nuriatatje@fsantaclara.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="voluntario-cta">
  <p>
    <strong>{t("cta-text")}</strong>
  </p>
  <button className="voluntario-cta-button">
    <a href="mailto:info@fsantaclara.org">{t("cta-button")}</a>
  </button>
</div>

        <div className="voluntario-collage">
          <img src={collage1} alt="Image 1" />
          <img src={collage7} alt="Image 4" />
          <img src={collage2} alt="Image 2" />
          <img src={collage3} alt="Image 3" />
          <img src={collage6} alt="Image 4" />
          <img src={collage5} alt="Image 4" />
          <img src={collage9} alt="Image 4" />
          <img src={collage8} alt="Image 4" />
          <img src={collage4} alt="Image 4" />
          <img src={collage10} alt="Image 4" />
        </div>
      </div>
    </>
  );
}

export default Voluntarios;

