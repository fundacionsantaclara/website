import React from "react";
import { useTranslation } from "react-i18next";

const EquipoMember = ({ member }) => {
  const { t } = useTranslation();
  return (
    <div className="profile">
      <img src={member.imageUrl} alt={member.altText} />
      <h2>{member.name}</h2>
      <p>{t(member.role)}</p>
      <p>{member.bio}</p>
    </div>
  );
};
export default EquipoMember;
