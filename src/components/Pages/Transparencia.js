import React from "react";
import "./Transparencia.css";
import { useTranslation } from "react-i18next";
import patrons from "../Documents/Patronat (CAT) de la FUNDACIÓ DEL CONVENT DE SANTA CLARA.docx.pdf";
import patronsCastellano from "../Documents/Patronat (CAST) de la FUNDACIÓ DEL CONVENT DE SANTA CLARA.pdf";
import estatutos from "../Documents/estatutofundacion.pdf";
import registros from "../Documents/REGISTRE PATRONAT DEPT. JUSTÍCIA GENERALITAT.pdf";
import normativos from "../Documents/Normativa-Aplicable-a-Fundacions.pdf";
import memo2018 from "../Documents/memoria_FRO_2018.pdf";
import memo2019 from "../Documents/memoria_FRO_2019.pdf";
import memo2020 from "../Documents/memoria_FCSC_2020_CA.pdf";
import memo2021 from "../Documents/memoria_FRO_2021_CAT_web2.pdf";
import memo2022 from "../Documents/memoria_FRO_2022_CAT_web.pdf";
import cuentas2018 from "../Documents/Comptes_anuals_2018.pdf";
import cuentas2019 from "../Documents/Comptes_anuals_2019.pdf";
import auditoría2020 from "../Documents/INFORME_AUDITORIA_I_CCAA_2020.pdf";
import auditoría2021 from "../Documents/INFORME_AUDITORIA_I_CCAA_2021.pdf";
import auditoría2022 from "../Documents/INFO_AUDITORIA_CCAA_2022_FCSC.pdf";
import audiotria2023 from "../Documents/INFO_AUDITORIA_CCAA_2023_FCSC.pdf";
import memo2023Novisual from "../Documents/memoria_FRO_2023.pdf";
import convenioDeColaboracionVigente from "../Documents/CONVENIS FCSC (DESEMBRE 2024, CAT.).pdf";
import convenioDeColaboracionVigenteCastellano from "../Documents/CONVENIOS DE COLABORACIÓN FORMALIZADOS POR FCSC (CAST).pdf";
import subencionesAdministracion from "../Documents/SUBVENCIONS ADMINISTRACIONS PÚBLIQUES 2018-2023.pdf";
import codigoEtico from "../Documents/RESUM_CODI_ETIC.pdf";
import image1 from "../Fcimages/transparencia//luciaheridotransparencia.jpg";
import image2 from "../Fcimages/transparencia/IMG_6234.jpg";
import image3 from "../Fcimages/transparencia/IMG_1309.jpg";
import image4 from "../Fcimages/transparencia/IMG_3779.jpg";
import image5 from "../Fcimages/transparencia/IMG_7658.jpg";

function Transparencia() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="trans section__padding">
        <div className="trans-container">
          <div className="trans__content text__center">
            <div className="trans-container-header">
              <h1 className="trans-section__title text__cap">
                {t("transparency-title")}
              </h1>
            </div>
            <p className="para__text text__grey">{t("transparency-intro")}</p>

           
            <div className="trans-card">
              <img src={image1} alt="Law Image" />
              <div className="trans-card-content-wrapper">
                <div className="trans-card-content">
                  <h2>{t("transparency-card1-title")}</h2>
                  <h3>{t("transparency-card1-subtitle")}</h3>
                  <ul className="trans-list">
                    <p>
                      <a className="link-offset-1" href={patrons} target="_blank">
                        {t("patrons-title")} 
                      </a>
                    </p>
                    
                    <p>
                      <a className="link-offset-1" href={estatutos} target="_blank">
                        {t("estatutos-title")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-1" href={registros} target="_blank">
                        {t("registros-title")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-1" href={normativos} target="_blank">
                        {t("normativo-title")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-1" href={codigoEtico} target="_blank">
                        {t("codigoEtico-title")}
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

            <div className="trans-card">
              <img src={image2} alt="Accounting Image" />
              <div className="trans-card-content-wrapper">
                <div className="trans-card-content">
                  <h2>{t("organigrama-title")}</h2>
                  <ul className="trans-list">
                    <p>
                      <a className="link-offset-1" href={memo2018} target="_blank">
                        {t("memoria-2018")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-2" href={memo2019} target="_blank">
                        {t("memoria-2019")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-3" href={memo2020} target="_blank">
                        {t("memoria-2020")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-3" href={memo2021} target="_blank">
                        {t("memoria-2021")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-3" href={memo2022} target="_blank">
                        {t("memoria-2022")}
                      </a>
                    </p>
                    <p>
                      <a
                        className="link-offset-3"
                        href={memo2023Novisual}
                        target="_blank"
                      >
                        {t("memoria-2023-no-visual")}
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

          
            <div className="trans-card">
              <img src={image3} alt="Economy Image" />
              <div className="trans-card-content-wrapper">
                <div className="trans-card-content">
                  <h2>{t("info-economica-title")}</h2>
                  <ul className="trans-list">
                    <p>
                      <a className="link-offset-3" href={cuentas2018} target="_blank">
                        {t("cuentas-2018")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-3" href={cuentas2019} target="_blank">
                        {t("cuentas-2019")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-3" href={auditoría2020} target="_blank">
                        {t("Informe Auditoría 2020")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-3" href={auditoría2021} target="_blank">
                        {t("Informe Auditoría 2021")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-3" href={auditoría2022} target="_blank">
                        {t("Informe Auditoría 2022")}
                      </a>
                    </p>
                    <p>
                      <a className="link-offset-1" href={audiotria2023} target="_blank">
                        {t("Informe Auditoría 2023")}
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

           
            <div className="trans-card">
              <img src={image4} alt="Economy Image" />
              <div className="trans-card-content-wrapper">
                <div className="trans-card-content">
                  <h2>{t("info-gestionAdministrativa-title")}</h2>
                  <ul className="trans-list">
                    <p>
                      <a
                        className="link-offset-1"
                        href={convenioDeColaboracionVigente}
                        target="_blank"
                      >
                        {t("convenio-colaboracion-vigente")} (CAT)
                      </a>
                    </p>
                    <p>
                      <a
                        className="link-offset-1"
                        href={convenioDeColaboracionVigenteCastellano}
                        target="_blank"
                      >
                        {t("convenio-colaboracion-vigente")} (CAST)
                      </a>
                    </p>
                    <p>
                      <a
                        className="link-offset-3"
                        href={subencionesAdministracion}
                        target="_blank"
                      >
                        {t("subenciones-administrativas")}
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

            <div className="trans-card">
              <img src={image5} alt="Image Description" />
              <div className="trans-card-content-wrapper">
                <div className="trans-card-content">
                  <h2>{t("retribucion-title")}</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: t("retribucion-description1") }}
                  ></p>
                {/*   <p
                    dangerouslySetInnerHTML={{ __html: t("retribucion-description2") }}
                  ></p>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transparencia;
