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
    <div className="taller">
      <div className="taller-header">
        <h1 className="tallersection__title text__cap">
          {t("taller-page-title")}
        </h1>
      </div>
      <div className="taller-container">
        <div className="taller__content text__center">
 
          <div className="taller__text">
            <h3 className="taller-text-title">{t("taller-card1-title")}</h3>
            <div
              className="paragraph-text"
              dangerouslySetInnerHTML={{ __html: t("taller-card1-para") }}
            ></div>
            <div
              className="paragraph-text"
              dangerouslySetInnerHTML={{ __html: t("taller-card1-para2") }}
            ></div>
          </div>

          <TallerCarousel />

          
          <div className="btn-taller">
            <TallerWhatsappBtn />
            <TallerEmail />
          </div>

       

          <TallerCarouselTheme />


             
             <div className="taller__text">
            <h3 className="taller-text-title">{t("taller-card2-title")}</h3>
            <div
              className="paragraph-text"
              dangerouslySetInnerHTML={{ __html: t("taller-card2-para") }}
            ></div>
            <div
              className="paragraph-text"
              dangerouslySetInnerHTML={{ __html: t("taller-card2-para2") }}
            ></div>
            <div
              className="paragraph-text"
              dangerouslySetInnerHTML={{ __html: t("taller-card2-para3") }}
            ></div>
          </div>

       
          <div className="taller__text">
            <h3 className="taller-text-title">{t("taller-location-title")}</h3>
            <div
              className="paragraph-text"
              dangerouslySetInnerHTML={{ __html: t("taller-location-para") }}
            ></div>
            <a
              href="https://www.google.com/maps/place/Fundaci%C3%B3n+del+Convento+de+Santa+Clara"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              {t("taller-location-map-btn")}
            </a>
          </div>
          <TallerStorybook />
        </div>
      </div>
    </div>
  );
}

export default Taller;
