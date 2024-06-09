import React from "react";
import "./Fundacion.css";
import aboutImage from "../Fcimages/woodbg.jpg";
import { useTranslation } from "react-i18next";

function Fundacion() {
  const { t } = useTranslation();
  return (
    <>
      <div className="fundacion-container">
        <div className="fundacion-content">
          <h1>{t("fundacion")}</h1>
          <p>{t("fund-text")}</p>
          <p>{t("fund-text2")}</p>
        </div>
        <div className="fundacion-image-container">
          <img src={aboutImage} alt="About Us" className="fundacion-image" />
        </div>
        <div className="patronato">
          <h1>{t("patronato")}</h1>
          <p className="para-intro">{t("pat-text")}</p>
          <p>{t("presi")}</p>
          <p>{t("vice")}</p>
          <p>{t("dire")}</p>
          <p>{t("teso")}</p>
          <p>{t("vocal1")}</p>
          <p>{t("vocal2")}</p>
          <p>{t("vocal3")}</p>
          <p>{t("vocal4")}</p>
          <p>{t("vocal5")}</p>
          <p>{t("vocal6")}</p>
          <p>{t("vocal7")}</p>
          <p>{t("vocal8")}</p>
          <p>{t("vocal9")}</p>
          <p>{t("vocal10")}</p>
          <p>{t("vocal11")}</p>
          <p>{t("vocal12")}</p>
          <p>{t("secre")}</p>
          <div className="fundacion-image-container">
            <img src={aboutImage} alt="About Us" className="fundacion-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fundacion;
