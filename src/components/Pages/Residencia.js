import React from 'react'
import './Residencia.css'
import resifoto from '../Fcimages/Residencia//FOTO RESIDENCIA 1.jpg';
import resifototwo from '../Fcimages/Residencia/FOTO REISDENCIA 3.jpg';
import resifototree from '../Fcimages/Residencia/FOTO RESIDENCIA 4.jpg'
import resifotofour from '../Fcimages/Residencia/FOTO RESIDENCIA 2.JPG'
import { useTranslation } from "react-i18next";

function Residencia() {
  const { t } = useTranslation();
  return (
    <div>
     
      <div className='resi-header'>
        <h1 className='section__title text__cap'>{t("residencia-page-title")}</h1>
      </div>
     
      <div className='resi section__padding'>
        <div className='resi-container'>
          <div className='resi__content'>
          
            <div className='resi-intro'>
              <p className='resi-card-text'>{t("residencia-page-intro1")}</p>
              <p className='resi-card-text'><small className='text-body-secondary'>{t("residencia-page-intro2")}</small></p>
            </div>

            
            <div className='resi-foto'>
              <img src={resifoto} className='card-img-bottom' alt='Foto de la residencia' />
              <img src={resifototwo} className='card-img-bottom' alt='Otra vista de la residencia' />
              <img src={resifototree} className='card-img-bottom' alt='Foto de la residencia' />
              <img src={resifotofour} className='card-img-bottom' alt='Otra vista de la residencia' />
              
            </div>

            <div className='resi-objectives'>
              <div className='resi-objective-card'>
                <h4 className='resi-card-title'><strong>{t("residencia-page-objectives-title")}</strong></h4>
                <p className='resi-card-text'>{t("residencia-page-objectives-desc")}</p>
              </div>
            </div>

           

     
            <div className='resi-small-container'>
              
              <div className='resi-card-small'>
                <div className='card-body'>
                  <h4 className='resi-card-title'><strong>{t("residencia-page-card1-title")}</strong></h4>
                  <p className='resi-card-text'><strong>{t("residencia-page-card1-info1-bold")}</strong> {t("residencia-page-card1-info1")}</p>
                  <p className='resi-card-text'><strong>{t("residencia-page-card1-info2-bold")}</strong> {t("residencia-page-card1-info2")}</p>
                  <p className='resi-card-text'><strong>{t("residencia-page-card1-info3-bold")}</strong> {t("residencia-page-card1-info3")}</p>
                </div>
              </div>

        
              <div className='resi-card-small'>
                <div className='card-body'>
                  <h4 className='resi-card-title'><strong>{t("residencia-page-card2-title")}</strong></h4>
                  <p className='resi-card-text'><strong>{t("residencia-page-card2-info1-bold")}</strong> {t("residencia-page-card2-info1")}</p>
                  <h4 className='resi-card-title'><strong>{t("residencia-page-card3-title")}</strong></h4>
                  <p className='resi-card-text'>{t("residencia-page-card3-info")}</p>
                </div>
              </div>

         
              <div className='resi-card-small'>
                <div className='card-body'>
                 
                  <h4 className='resi-card-title'><strong>{t("residencia-page-card2-title2")}</strong></h4>
                  <p className='resi-card-text'><strong>{t("residencia-page-card2-info2-bold")}</strong> {t("residencia-page-card2-info2")}</p>
                  <p className='resi-card-text'><strong>{t("residencia-page-card2-info3-bold")}</strong> {t("residencia-page-card2-info3")}</p>
                  <p className='resi-card-text'><strong>{t("residencia-page-card2-info4-bold")}</strong> {t("residencia-page-card2-info4")}</p>
                </div>
              </div>
            </div>

          
            <div className='resi-additional-info'>
              <p>{t("residencia-page-card4-info")}</p>
              <p><strong>{t("residencia-page-card4-info-bold")}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Residencia;