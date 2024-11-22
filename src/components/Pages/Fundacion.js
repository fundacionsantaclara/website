import React from "react";
import "./Fundacion.css";
import aboutImage from "../Fcimages/woodbg.jpg";
import convent from "../../Images/fundacion.jpg";
import patronato from "../../Images/patronato.jpg";
import { useTranslation } from "react-i18next";

function Fundacion() {
  const { t } = useTranslation();

  const patronatoMembers = [
    { id: 1, role: t("presi").split(":")[0], name: t("presi").split(":")[1] },
    { id: 2, role: t("vice").split(":")[0], name: t("vice").split(":")[1] },
    { id: 3, role: t("dire").split(":")[0], name: t("dire").split(":")[1] },
    { id: 4, role: t("teso").split(":")[0], name: t("teso").split(":")[1] },
    { id: 5, role: t("vocal1").split(":")[0], name: t("vocal1").split(":")[1] },
    { id: 6, role: t("vocal2").split(":")[0], name: t("vocal2").split(":")[1] },
    { id: 7, role: t("vocal3").split(":")[0], name: t("vocal3").split(":")[1] },
    { id: 8, role: t("vocal4").split(":")[0], name: t("vocal4").split(":")[1] },
    { id: 9, role: t("vocal5").split(":")[0], name: t("vocal5").split(":")[1] },
    { id: 10, role: t("vocal6").split(":")[0], name: t("vocal6").split(":")[1] },
    { id: 11, role: t("vocal7").split(":")[0], name: t("vocal7").split(":")[1] },
    { id: 12, role: t("vocal8").split(":")[0], name: t("vocal8").split(":")[1] },
    { id: 13, role: t("vocal9").split(":")[0], name: t("vocal9").split(":")[1] },
    { id: 14, role: t("vocal10").split(":")[0], name: t("vocal10").split(":")[1] },
    { id: 15, role: t("vocal11").split(":")[0], name: t("vocal11").split(":")[1] },
    { id: 16, role: t("vocal12").split(":")[0], name: t("vocal12").split(":")[1] },
    { id: 17, role: t("secre").split(":")[0], name: t("secre").split(":")[1] }
  ];

  return (
    <>
      <div className="fundacion-container">
        <div className="fundacion-content">
          <h1>{t("fundacion")}</h1>
          <p>{t("fund-text")}</p>
          <p>{t("fund-text2")}</p>
        </div>
        <div className="fundacion-image-container">
          <img src={convent} alt="About Us" className="fundacion-image" />
        </div>
        <div className="patronato">
          <h1>{t("patronato")}</h1>
          <p className="para-intro">{t("pat-text")}</p>
          <div className="patronato-members">
            {patronatoMembers.map((member) => (
              <div key={member.id} className="patronato-member-card">
                <p className="member-role">{member.role}:</p>
                <p className="member-name">{member.name}</p>
              </div>
            ))}
          </div>
          <div className="fundacion-image-container">
            <img src={patronato} alt="About Us" className="fundacion-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fundacion;
