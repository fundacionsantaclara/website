import React from "react";
import "./Taller.css";
import { useTranslation } from "react-i18next";

function TallerWhatsappBtn() {
  const { t } = useTranslation();
  const phoneNumber = "+34655224308"; // Replace this with the desired phone number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <button className="first-btn" onClick={handleClick}>
      <strong> {t("taller-whatsapp-btn")}</strong>
    </button>
  );
}

export default TallerWhatsappBtn;
