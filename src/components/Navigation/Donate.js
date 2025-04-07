import React from "react";
import { Link } from "react-router-dom";
import "./Donate.css";
import { useTranslation } from "react-i18next";

function Donate() {
  const { t } = useTranslation();

  return (
    <div className="donate-container">
      <h1>{t("fiscal-title")}</h1>

      <div className="donation-info-container">
        <div className="donation-info">
          <h2>{t("fiscal-individual-title")}</h2>
          <p>{t("fiscal-individual-text-1")}</p>
          <p>{t("fiscal-individual-text-2")}</p>
        </div>

        <div className="donation-info">
          <h2>{t("fiscal-company-title")}</h2>
          <p>{t("fiscal-company-text-1")}</p>
          <p>{t("fiscal-company-text-2")}</p>
          <p>{t("fiscal-company-text-3")}</p>
        </div>
      </div>

      <a
        href="https://www2.caixabank.es/apl/donativos/detalle_es.html?DON_codigoCausa=715"
        className="donate-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("donate-button")}
      </a>

      <Link to="/" className="back-home">
        {t("back-home")}
      </Link>
    </div>
  );
}

export default Donate;
