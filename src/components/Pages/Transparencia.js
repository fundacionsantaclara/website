import React from "react";
import "./Transparencia.css";
import { useTranslation } from "react-i18next";
import patrons from "../Documents/Patrons.pdf";
import estatutos from "../Documents/estatuts_new.pdf";
import registros from "../Documents/registre.pdf";
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
import audiotria2023 from "../Documents/INFO_AUDITORIA_CCAA_2023_FCSC.pdf"
import memo2023Novisual from "../Documents/memoria_FRO_2023.pdf"
import convenioDeColaboracionVigente from "../Documents/Convenis-de-col.laboracio-vigents.pdf"
import subencionesAdministracion from "../Documents/SUBVENCIONS ADMINISTRACIONS PÚBLIQUES 2018-2023.pdf"



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

            {/* Primer Tarjeta */}
            <div className="trans-card">
              <img src="https://www.sharda.ac.in/blog/attachments/blog_images/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-min.jpg" alt="Law Image"/>
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
                  </ul>
                </div>
              </div>
            </div>

            {/* Segunda Tarjeta */}
            <div className="trans-card">
              <img src="https://uploads-ssl.webflow.com/575ef60509a5a7a9116d9f8c/5ea21e418558777085ce093a_memoria%20contable%20ERP%20nube%20administracion%20empresas.jpg" alt="Accounting Image"/>
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
                      <a className="link-offset-3" href={memo2023Novisual} target="_blank">
                        {t("memoria-2023-no-visual")}
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tercera Tarjeta */}
            <div className="trans-card">
              <img src="https://bradfordjacobs.com/wp-content/uploads/2021/07/economy.jpg" alt="Economy Image"/>
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
                      <a className="link-offset-1" href={audiotria2023} target="_blank" >
                        {t("Informe Auditoría 2023")}
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

          {/* Cuarta Tarjeta */}
          <div className="trans-card">
              <img src="https://bradfordjacobs.com/wp-content/uploads/2021/07/economy.jpg" alt="Economy Image"/>
              <div className="trans-card-content-wrapper">
                <div className="trans-card-content">
                  <h2>{t("info-gestionAdministrativa-title")}</h2>
                  <ul className="trans-list">
                    <p>
                      <a className="link-offset-1" href={convenioDeColaboracionVigente} target="_blank">
                        {t("convenio-colaboracion-vigente")}
                      </a>
                    </p>
                    
                    <p>
                      <a className="link-offset-3" href={subencionesAdministracion} target="_blank">
                        {t("subenciones-administrativas")}
                      </a>
                    </p>
                  </ul>
                </div>
              </div>
            </div>

            <div className="trans-card">
  <img src="https://www.yourdomain.com/path-to-image.jpg" alt="Image Description" />
  <div className="trans-card-content-wrapper">
    <div className="trans-card-content">
      <h2>{t("retribucion-title")}</h2>
      <p dangerouslySetInnerHTML={{ __html: t("retribucion-description1") }}></p>
      <p dangerouslySetInnerHTML={{ __html: t("retribucion-description2") }}></p>
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
