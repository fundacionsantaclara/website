import React from 'react'
import './Taller.css'
import { useTranslation } from "react-i18next";


function Talleremail() {
  const { t } = useTranslation();
    const recipientEmail = 'info@fsantaclara.org'; // Replace this with the recipient's email address
  const subject = 'Comprar muñecos'; // Replace this with the desired email subject

  const handleClick = () => {
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <button className='second-btn' onClick={handleClick}>
      <strong> {t("taller-email-btn")}</strong>
  </button>  )
}

export default Talleremail