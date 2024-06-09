import React from 'react'
import './Residencia.css'
import resifoto from '../Fcimages/fotos de residencia.jpg';
import resifototwo from '../Fcimages/resi foto2.jpg';
import { useTranslation } from "react-i18next";





function Residencia() {
  const { t } = useTranslation();
  return (
    <div>
    <div className='resi section__padding'>
      <div className='resi-container'>
          <div className='resi__content text__center'>
              <div className='resi-header'><h1 className='section__title text__cap'>{t("residencia-page-title")}</h1></div>
              <div class="resi-card">
    <p class="Resi-card-text">{t("residencia-page-intro1")}</p>
    <p class="Resi-card-text"><small class="text-body-secondary">{t("residencia-page-intro2")}</small></p>
  </div>
  <div className='resi-foto'>
  <img src={resifoto} class="card-img-bottom" alt="..."/>
  <img src={resifototwo} class="card-img-bottom" alt="..."/>
  </div>
  <div className='resi-small-container'>
  <div className='smallpart-section'>
  <div className='resi-card-small'>
  <div class="card-body text-success">
    <h4 class="Resi-card-title"><strong>{t("residencia-page-card1-title")}</strong></h4>
    <p class="Resi-card-text"><strong>{t("residencia-page-card1-info1-bold")}</strong> {t("residencia-page-card1-info1")}</p>
    <p class="Resi-card-text"><strong>{t("residencia-page-card1-info2-bold")}</strong> {t("residencia-page-card1-info2")} </p>
    <p class="Resi-card-text"><strong>{t("residencia-page-card1-info3-bold")}</strong> {t("residencia-page-card1-info3")}</p>

  </div>
  </div>
  </div>
  <div className='smallpart-section'>
  <div className='resi-card-small'>
  <div class="card-body text-success">
    <h4 class="Resi-card-title"><strong>{t("residencia-page-card2-title")}</strong></h4>
    <p class="Resi-card-text"><strong>{t("residencia-page-card2-info1-bold")}</strong>  {t("residencia-page-card2-info1")}</p>
    <h4 class="Resi-card-title"><strong>{t("residencia-page-card2-title2")}</strong></h4>
    <p class="Resi-card-text"><strong>{t("residencia-page-card2-info2-bold")}</strong> {t("residencia-page-card2-info2")}</p>
    <p class="Resi-card-text"><strong>{t("residencia-page-card2-info3-bold")}</strong> {t("residencia-page-card2-info3")}</p>
    <p class="Resi-card-text"><strong>{t("residencia-page-card2-info4-bold")}</strong> {t("residencia-page-card2-info4")}</p>



  </div>
  </div>
  </div>
  <div className='smallpart-section'>
  <div className='resi-card-small'>
  <div class="card-body text-success">
    <h4 class="Resi-card-title"><strong>{t("residencia-page-card3-title")}</strong></h4>
    <p class="Resi-card-text">{t("residencia-page-card3-info")}</p>
  
  </div>
  </div>
  </div>
  </div>
  <div class="resi-para-card-body">
<p>{t("residencia-page-card4-info")}</p>
<p><strong>{t("residencia-page-card4-info-bold")}</strong></p>
  </div>
  
      </div>
      </div>
      </div>        
  </div>
  )
}

export default Residencia