import React from "react";
import "./Huerto.css";
import { useTranslation } from "react-i18next";
import huertopic1 from "../Fcimages/huertopic1.jpg";
import huertopic2 from "../Fcimages/huertopic2.jpg";
import huertopic3 from "../Fcimages/huertopic3.jpg";
import huertopic4 from "../Fcimages/huertopic4.jpg";

function Huerto() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="huerto section__padding">
        <div className="huerto-container">
          <div className="huerto__content text__center">
            <div className="huerto-header">
              <h1 className="huerto-section__title text__cap">
                {t("huerto-page-title")}
              </h1>
            </div>
            <div className="huerto-para">
              <p className="huerto__text text__grey">
                {t("huerto-page-para1")}
              </p>
              <p className="huerto__text text__grey">
                {t("huerto-page-para2")}
              </p>
            </div>
          </div>
        </div>

        <div className="huerto-image-container">
          <div className="huerto-pic">
            <img src={huertopic1} alt="img 1" />
            <img src={huertopic2} alt="img 2" />
            <img src={huertopic3} alt="img 3" />
            <img src={huertopic4} alt="img 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Huerto;
