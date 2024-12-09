import React from 'react';
import "./TranslateBtn.css";
import { useTranslation } from 'react-i18next';

const TranslateBtn = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-container">
      <button className="language-btn" onClick={() => changeLanguage('en')}>
        {t("language-english")}
      </button>
      <button className="language-btn" onClick={() => changeLanguage('es')}>
        {t("language-spanish")}
      </button>
      <button className="language-btn" onClick={() => changeLanguage('ca')}>
        {t("language-catalan")}
      </button>
    </div>
  );
};

export default TranslateBtn;
