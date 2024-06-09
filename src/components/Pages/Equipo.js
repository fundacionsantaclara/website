import React from "react";
import "./Equipo.css";
import EquipoMember from "./EquipoMember";
/**import EquipoData from './Members.json'**/
import EquipoData from "./EquipoData";
import { useTranslation } from "react-i18next";

function Equipo() {
  const { t } = useTranslation();
  return (
    <div className="equipo-container">
      <h1 className="equipo-title">{t("miembros")}</h1>
      <div className="profiles">
        {EquipoData.map((member) => (
          <EquipoMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default Equipo;
