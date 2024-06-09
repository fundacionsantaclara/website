import React from "react";
import "./Objectivo.css";
import Mission from "../Pages/Mission";
import Valores from "../Fcimages/value1.jpg";
import SDG from "../Fcimages/sdg.jpg";
import Objectio from "../Fcimages/objectivos.jpg";
import { useTranslation } from "react-i18next";

function Objectivo() {
  const { t } = useTranslation();
  return (
    <>
      <Mission />
      <div className="valores-container">
        <div className="valores-card">
          <img src={Valores} alt="" className="valores-card-image" />
          <div className="valores-card-content">
            <h2 className="valores-card-title">{t("valores")}</h2>
            <p>
              <strong>{t("just")}</strong> {t("just2")}
            </p>
            <p>
              <strong>{t("juststrong")}</strong> {t("compr")}
            </p>
            <p>
              <strong>{t("strong")}</strong> {t("verdad")}
            </p>
          </div>
        </div>
      </div>
      <h1 className="objectivo-title">{t("goal")}</h1>
      <div className="objectivo-card-container">
        <div className="objectivo-card">
          <img src={Objectio} alt="" className="objectivo-card-image" />
          <div className="objectivo-card-content">
            <h2 className="objectivo-card-title">{t("primario")}</h2>
            <p>{t("primariotext")}</p>
            <p>{t("primariotext2")}</p>

            <p>{t("primariotext3")}</p>
          </div>
        </div>
        <div className="objectivo-card">
          <img src={SDG} alt="" className="objectivo-card-image" />
          <div className="objectivo-card-content">
            <h2 className="objectivo-card-title">{t("sdg")}</h2>
            <p>{t("sdgs")}</p>
            <p>{t("sd-text")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objectivo;
