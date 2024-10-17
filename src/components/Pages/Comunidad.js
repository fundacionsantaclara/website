import React from "react";
import { useTranslation } from "react-i18next";

function Comunidad() {
  const { t } = useTranslation(); // Hook para traducciones



  return (
    <div>
      <h1>{t("comunidad-title")}</h1>
      <p>{t("comunidad-description")}</p>
    </div>
  );
}

export default Comunidad;