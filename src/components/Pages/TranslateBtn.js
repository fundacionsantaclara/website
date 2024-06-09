import React from 'react';
import "./TranslateBtn.css"
import { useTranslation } from 'react-i18next';

const TranslateBtn = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-container">
      <button className="language-btn" onClick={() => changeLanguage('en')}>English</button>
      <button className="language-btn" onClick={() => changeLanguage('es')}>Spanish</button>
      <button className="language-btn" onClick={() => changeLanguage('ca')}>Catalan</button>
    </div>
  );
};



export default TranslateBtn