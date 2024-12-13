import React from 'react'
import './Taller.css'
import { useTranslation } from "react-i18next";


function Talleremail() {
  const { t } = useTranslation();
    const recipientEmail = 'info@fsantaclara.org'; 
  const subject = 'Comprar muñecos'; 

  const handleClick = () => {
    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <button className='second-btn' onClick={handleClick}>
      <strong> {t("taller-email-btn")}</strong>
  </button>  )
}

export default Talleremail