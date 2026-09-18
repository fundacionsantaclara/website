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
          </div>
          <div className="taller__text2">
            <h3 className="taller-text-title">{t("taller-card1-title2")}</h3>
            <div
              className="paragraph-text1"
              dangerouslySetInnerHTML={{ __html: t("taller-card1-para2") }}
            ></div>
          </div>

          {/* <TallerCarousel /> */}

          <div className="btn-taller">
            {/* <TallerWhatsappBtn /> */}
            <TallerEmail />
          </div>

          <TallerCarouselTheme />

          <div className="taller__text">
            <h3 className="taller-text-title">{t("taller-card2-title")}</h3>
            <div
              className="paragraph-text"
              dangerouslySetInnerHTML={{ __html: t("taller-card2-para") }}
            ></div>
            <div className="taller__loc2 ">
              <h3 className="taller-text-title">
                {t("taller-location-title")}
              </h3>

              <a
                href="https://maps.app.goo.gl/sb2ntQ6iYBmrN7pY6"
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn"
              >
                {t("taller-location-map-btn")}
              </a>
            </div>
          </div>

          <div className="taller__loc">
            <h3 className="taller-text-title">{t("taller-price-title")}</h3>

            <div className="taller__pricing">
              {/* Main product */}
              <div className="taller__main-price">
                <div className="taller__main-price-text">
                  <span>{t("taller-price-main-label")}</span>
                </div>
                <div className="taller__main-price-value">45 €</div>
              </div>

              {/* Extras */}
              <div className="taller__extras">
                <div className="taller__extra">
                  <div className="taller__extra-content">
                    <span className="taller__extra-title">
                      {t("taller-price-small")}
                    </span>
                  </div>
                  <span className="taller__extra-price">+ 5 €</span>
                  <span className="taller__extra-unit">{t("taller-unit")}</span>
                </div>

                <div className="taller__extra">
                  <div className="taller__extra-content">
                    <span className="taller__extra-title">
                      {t("taller-price-large")}
                    </span>
                  </div>
                  <span className="taller__extra-price">+ 10 €</span>
                  <span className="taller__extra-unit">{t("taller-unit")}</span>
                </div>

                <div className="taller__extra">
                  <div className="taller__extra-content">
                    <span className="taller__extra-title">
                      {t("taller-price-transport")}
                    </span>
                  </div>
                  <span className="taller__extra-price">+ 8 €</span>
                  <span className="taller__extra-unit">
                    {t("taller-package")}
                  </span>
                </div>

                <div className="taller__extra">
                  <div className="taller__extra-content">
                    <span className="taller__extra-title">
                      {t("taller-price-apron")}
                    </span>
                  </div>
                  <span className="taller__extra-price">20 €</span>
                </div>

                <div className="taller__extra">
                  <div className="taller__extra-content">
                    <span className="taller__extra-title">
                      {t("taller-price-bag")}
                    </span>
                  </div>
                  <span className="taller__extra-price">20 €</span>
                </div>
              </div>
            </div>
          </div>
          {/* <TallerStorybook /> */}
        </div>
      </div>
    </div>
  );
}

export default Taller;
