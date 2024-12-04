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
        <div className="josoc-header">
          <h1 className="josoc-section__title text__cap">{t("josoc")}</h1>
        </div>
        <div className="josoc-container">
          <div className="josoc__content text__center">
            <p className="josoc-project-text">
              {t("josoc-text")}
              <strong>{t("josoc-strong")}</strong>.
            </p>
          </div>

          <h2 className="obj-title">{t("objetivo-principal")}</h2>
          <div className="josoc-project-info">
            <p className="josoc-project-text">{t("objetivo-principal-text")}</p>
            <h2 className="obj-title">{t("objetivo-individualizado")}</h2>
            <p className="josoc-project-text">{t("objetivo-individualizado-text")}</p>
          </div>

          <h2 className="obj-title">{t("objetivos-tres")}</h2>
          <div className="josoc-card-container">
            <div className="josoc-card">
              <h3>{t("mejora-regularizacion")}</h3>
              <p>{t("mejora-regularizacion-text")}</p>
            </div>
            <div className="josoc-card">
              <h3>{t("itinerario-laboral")}</h3>
              <p>{t("itinerario-laboral-text")}</p>
            </div>
            <div className="josoc-card">
              <h3>{t("itinerario-formativo")}</h3>
              <p>{t("itinerario-formativo-text")}</p>
            </div>
          </div>

          <div className="josoc-pic">
            <img src={Josocpic} className="josoc-card-img" alt="..." />
            <img src={Josocpic2} className="josoc-card-img" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Josoc;
