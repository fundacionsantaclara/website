import React from "react";
import "./Taller.css";
import { useTranslation } from "react-i18next";
import TallerCarousel from "./TallerCarousel";
import TallerCarouselTheme from "./TallerCarouselTheme";
import TallerStorybook from "./TallerStorybook";
import TallerWhatsappBtn from "./TallerWhatsapp";
import TallerEmail from "./Talleremail";

function Taller() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="taller section__padding">
        <div className="taller-container">
          <div className="taller__content text__center">
            <div className="taller-header">
              <h1 className="tallersection__title text__cap">
                {t("taller-page-title")}
              </h1>
            </div>
            <div className="taller-part1">
              <div className="taller__text">
                <h3 className="taller-text-title">{t("taller-card1-title")}</h3>
                <div className="paragraph-text">
                  <p className=" text__grey">{t("taller-card1-para")}</p>
                  <p>{t("taller-card1-para2")}</p>
                </div>
              </div>
              <TallerCarousel />
              <div className="para-text2">
                <p>{t("taller-card2-para")}</p>
                <p>{t("taller-card2-para2")}</p>
                <p>{t("taller-card2-para3")}</p>
                <div className="btn-taller">
                  <TallerWhatsappBtn />
                  <TallerEmail />
                </div>
              </div>
              <TallerCarouselTheme />
              <TallerStorybook />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taller;
