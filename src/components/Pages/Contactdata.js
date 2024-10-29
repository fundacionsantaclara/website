import React from "react";
import Fundacion from "../Fcimages/vissionbg.jpg";
import contact from "../../Images/contactofoto.png";
import { useTranslation } from "react-i18next";

function Contactdata() {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact-page">
        <div className="location">
          <img className="fundacion-pic" src={contact} alt="" />
        </div>
        <div className="contact-form">
          {/* Contact Form */}
          <h2 className="contact-title">{t("contacto")}</h2>
          <h6 className="contact-subtitle">{t("direc")}</h6>
          <p> {t("dire-text")} </p>
          <p>{t("adress")} </p>
          <p>{t("ad-2")} </p>
          <h6 className="contact-subtitle">{t("phone")}</h6>
          <p> T. 93 873 4928</p>
          <h6 className="contact-subtitle">{t("mail")}</h6>
          <p className="mail-text"> info@fsantaclara.org </p>
        </div>
      </div>
    </>
  );
}

export default Contactdata;
