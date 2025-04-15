import React from "react";
import "./Invulnerables.css";
import InvulnerablePic from "../Fcimages/invul-fam.jpg";
import InvulnerablePic1 from "../Fcimages/invulnerables/on estem.png";
import InvulnerablePic2 from "../Fcimages/invulnerables/Maig.jpg";
import InvulnerablePic3 from "../Fcimages/invul1.jpg";
// import InvulnerableColl from "../Fcimages/invul-img.jpg";
import InvulnerableColl from "../Fcimages/football.jpg";
import InvulnerableColl2 from "../Fcimages/invul-img2.jpg";
import InvulnerableColl3 from "../Fcimages/Invul-img3.jpg";
// import InvulnerableColl4 from "../Fcimages/invul-img4.jpg";
import InvulnerableColl4 from "../Fcimages/Campus.jpg";
import { useTranslation } from "react-i18next";

function Invulnerables() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="invulnerables section__padding">
        <div className="invulnerables-header">
          <h1 className="invulnerables-section__title text__cap">
            {t("invulnerables-page-title")}
          </h1>
        </div>

        <div className="invulnerables-container">
          <div className="invulnerables__content text__center">
            <h2 className="invulnerables__content-title">
              {t("inv-content-title")}
            </h2>
            <p className="invulnerables__text text__grey">
              {t("inv-description")}
            </p>
          </div>

          <div className="invulnerables-card2-container">
            <div className="invul-card">
              <img
                src={InvulnerablePic}
                className="invulnerables-img"
                alt="..."
              />
              <h2>{t("program-title")}</h2>
              <p>
                <strong>{t("strong-inv")}</strong> {t("p-inv")}
              </p>
            </div>
            <div className="invul-card">
              <h2>{t("igual")}</h2>
              <p>{t("p-igual")}</p>
              <img
                src={InvulnerablePic1}
                className="invulnerables-img"
                alt="..."
              />
            </div>

            <div className="invul-image-collage">
              <div className="collage-item">
                <img
                  src={InvulnerableColl}
                  alt="..."
                  className="collage-image"
                />
                <p className="collage-text">{t("collage-text-1")}</p>
              </div>
              <div className="collage-item">
                <img
                  src={InvulnerableColl2}
                  className="collage-image"
                  alt="..."
                />
                <p className="collage-text">{t("collage-text-2")}</p>
              </div>
              <div className="collage-item">
                <img
                  src={InvulnerableColl3}
                  className="collage-image"
                  alt="..."
                />
                <p className="collage-text">{t("collage-text-3")}</p>
              </div>
              <div className="collage-item">
                <img
                  src={InvulnerableColl4}
                  className="collage-image"
                  alt="..."
                />
                <p className="collage-text">{t("collage-text-4")}</p>
              </div>
            </div>

            <div className="invul-card">
              <h2>{t("recur")}</h2>
              <h5>{t("p-recur")}</h5>
              <p>
                <strong>{t("p-recur-strong")}</strong>
              </p>
              <p>{t("p-recur-2")}</p>
              {/* <img
                src={InvulnerablePic2}
                className="invulnerables-img"
                alt="..."
              /> */}
            </div>

            <div className="invul-card">
              <h2>{t("recurs")}</h2>
              <h5>{t("p-recurs")}</h5>
              <p>
                <strong>{t("p-recurs-strong")}</strong>
              </p>
              <p>{t("p-recurs-2")}</p>
              {/* <img
                src={InvulnerablePic3}
                className="invulnerables-img"
                alt="..."
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invulnerables;
