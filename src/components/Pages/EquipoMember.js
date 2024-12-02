import React from "react";
import { useTranslation } from "react-i18next";

const EquipoMember = ({ member }) => {
  const { t } = useTranslation();
  return (
    <div className="profile">
      <img src={member.imageUrl} alt={member.altText} />
      <h2>{member.name}</h2>
      <p>{t(member.role)}</p>
      {member.bio && <p>{member.bio}</p>}
      {member.email && (
        <p>
          <a href={`mailto:${member.email}`} className="email-link">
            {member.email}
          </a>
        </p>
      )}
    </div>
  );
};
export default EquipoMember;
