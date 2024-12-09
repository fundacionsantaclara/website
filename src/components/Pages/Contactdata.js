import React from "react";
import contact from "../../Images/E39292FD-F9DF-4DA7-8DED-8A87EBFF05E9_L0_001-27_09_2023, 11_59_43.jpg";
import { useTranslation } from "react-i18next";

function Contactdata() {
  const { t } = useTranslation();
  return (
    <>
      <div className="contact-page">
        <div className="location">
          <img className="fundacion-pic" src={contact} alt="Fundación Santa Clara" />
        </div>
        <div className="contact-form">
          <h2 className="contact-title">{t("contacto")}</h2>
          <h6 className="contact-subtitle">{t("direc")}</h6>
          <p>{t("dire-text")}</p>
          <p>
            <a 
              href="https://www.google.com/maps/place/Carrer+Nou+de+Santa+Clara,+66,+08241+Manresa,+Barcelona/@41.7203805,1.833535,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4f7d95ad5e98b:0x3f44ff09eed0223!8m2!3d41.7203765!4d1.8361099!16s%2Fg%2F11n6s42hk4?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Carrer Nou de Santa Clara, 62
            </a>
          </p>
          <h6 className="contact-subtitle">{t("phone")}</h6>
          <p>
            <a href="tel:+34938734928">T. 93 873 4928</a>
          </p>
          <h6 className="contact-subtitle">{t("mail")}</h6>
          <p className="mail-text">
            <a href="mailto:info@fsantaclara.org">info@fsantaclara.org</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contactdata;
