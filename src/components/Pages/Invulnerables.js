import React from "react";
import "./Invulnerables.css";
import Invulnerable from "../Fcimages/Invulnerables.png";
import InvulnerablePic from "../Fcimages/Juny.jpg";
import InvulnerableColl from "../Fcimages/invul-img.jpg";
import InvulnerableColl2 from "../Fcimages/invul-img2.jpg";
import InvulnerableColl3 from "../Fcimages/Invul-img3.jpg";
import InvulnerableColl4 from "../Fcimages/invul-img4.jpg";
import { useTranslation } from "react-i18next";

function Invulnerables() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="invulnerables section__padding">
        <div className="invulnerables-container">
          <div className="invulnerables__content text__center">
            <div className="invulnerables-header">
              <img src={Invulnerable} class="invulnerables-img" alt="..." />
            </div>
            <p className="invulnerables__text text__grey">
              {t("inv-description")}
            </p>
          </div>
          <div className="invulnerables-card2-container">
            <div className="invul-card">
              <img src={InvulnerablePic} class="invulnerables-img" alt="..." />
              <h2>{t("program-title")}</h2>
              <p>
                <strong>{t("strong-inv")}</strong> {t("p-inv")}
              </p>
            </div>
            <div className="invul-card">
              <h2>{t("igual")}</h2>
              <p>{t("p-igual")}</p>
              <img src={InvulnerablePic} class="invulnerables-img" alt="..." />
            </div>
            <div className="invul-card">
              <h2>{t("recur")}</h2>
              <h5>{t("p-recur")}</h5>
              <p>
                <strong>{t("p-recur-strong")}</strong>
              </p>
              <p>{t("p-recur-2")}</p>
              <img src={InvulnerablePic} class="invulnerables-img" alt="..." />
            </div>
            <div className="invul-image-collage">
              <img src={InvulnerableColl} alt="..." className="collage-image" />
              <img
                src={InvulnerableColl2}
                className="collage-image"
                alt="..."
              />
              <img
                src={InvulnerableColl3}
                className="collage-image"
                alt="..."
              />
              <img
                src={InvulnerableColl4}
                className="collage-image"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invulnerables;
