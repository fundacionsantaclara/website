import React from 'react'
import PlatCardData from "./PlataformaData"
import './Plataforma.css'
import { useTranslation } from "react-i18next";


function Plataforma() {
  const { t } = useTranslation();
  return (
    <div>
      <div className='plataforma section__padding'>
        <div className='plata-container'>
            <div className='plataforma__content text__center'>
                <div className='plata-header'><h1 className='plat-section__title text__cap'>{t("plataforma-page-title")}</h1></div>
        </div>
        </div>
        <ul>
        <PlatCardData
              src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/12/30/plataforma-de-alimentos-de-manresa.jpeg"
              text="PLATAFORMA DE ALIMENTOS"
              para={t("plataforma-paragraph")}
            />
        
       
        </ul>
        </div>        
    </div>
  )
}

export default Plataforma