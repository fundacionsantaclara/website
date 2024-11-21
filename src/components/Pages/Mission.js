import React from "react";
import "./Mission.css";
import Misionbg from "../Fcimages/reto 3.JPG";
import Visionbg from "../Fcimages/visionsection.jpeg";
import Valoresbg from "../Fcimages/valoresbg.png";
import { useTranslation } from 'react-i18next';

const Mission = ({ text, imageSrc }) => {
  const { t } = useTranslation();
  return (
    <div className="MV-container">
      <div className="Mission-card">
        <div className="Mission-card-text">
          <h2>{t('mission-title')}</h2>
          <p>
          {t('mission')}
          </p>
        </div>
        <div className="Mission-card-image">
          <img src={Misionbg} alt="Event" />
        </div>
      </div>
      <div className="Vission-card">
        <div className="Vission-card-text">
          <h2>{t('vision-title')}</h2>
          <p>
          {t('vission')}
          </p>
        </div>
        <div className="Vission-card-image">
          <img src={Visionbg} alt="Event" />
        </div>
      </div>

      <div className="Values-card">
        <div className="Values-card-text">
          <h2>{t('valores')}</h2>
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
        <div className="Values-card-image">
          <img src={Valoresbg} alt="Event" />
        </div>
      </div>

      
    </div>
  );
};

export default Mission;
