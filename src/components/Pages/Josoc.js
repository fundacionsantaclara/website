import React from "react";
import "./Josoc.css";
import Josocpic from "../Fcimages/josocb.JPG";
import Josocpic2 from "../Fcimages/josoca.JPG";
import { useTranslation } from "react-i18next";

function Josoc() {
  const { t } = useTranslation();
  return (
    <>
      <div className="josoc section__padding">
        <div className="josoc-container">
          <div className="josoc__content text__center"></div>
          <div className="josoc-header">
            <h1 className="josoc-section__title text__cap">{t("josoc")}</h1>
          </div>

          <div className="josoc-project-info">
            <p className="josoc-project-text">
              {t("josoc-text")}
              <strong>{t("josoc-strong")}</strong>.
            </p>
            <h2 className="obj-title">{t("objetivo")}</h2>
            <div className="josoc-card-container">
              <div className="josoc-card">
                <h3>{t("obj-title")}</h3>
                <p> {t("obj-text")}</p>
              </div>
              <div className="josoc-card">
                <h3>{t("porque")}</h3>
                <p> {t("porque-text")}</p>
              </div>
            </div>
            <p></p>
          </div>
          <div className="josoc-pic">
            <img src={Josocpic} class="josoc-card-img" alt="..." />
            <img src={Josocpic2} class="josoc-card-img" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Josoc;
