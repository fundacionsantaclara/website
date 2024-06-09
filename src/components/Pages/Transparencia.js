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
import cuentas2015 from "../Documents/ccca-2015-complets.pdf";
import plan2016 from "../Documents/Pla-dactivitats-FRO-2016-2017.pdf";
import cuentas2016 from "../Documents/Comptes_anuals_2016.pdf";
import cuentas2017 from "../Documents/Comptes_anuals_2017.pdf";
import cuentas2018 from "../Documents/Comptes_anuals_2018.pdf";
import cuentas2019 from "../Documents/Comptes_anuals_2019.pdf";
import auditoría2020 from "../Documents/INFORME_AUDITORIA_I_CCAA_2020.pdf";
import auditoría2021 from "../Documents/INFORME_AUDITORIA_I_CCAA_2021.pdf";
import auditoría2022 from "../Documents/INFO_AUDITORIA_CCAA_2022_FCSC.pdf";








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
              <img src="https://www.sharda.ac.in/blog/attachments/blog_images/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-min.jpg" />
              <div className="trans-card-content">
                <h2>{t("transparency-card1-title")}</h2>
                <h3>{t("transparency-card1-subtitle")}</h3>
                <h5>{t("transparency-card1-subtitle2")}</h5>
                <ul className="trans-list">
                  <p>
                    <a class="link-offset-1" href={patrons}>
                      {t("patrons-title")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-1" href={estatutos}>
                      {t("estatutos-title")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-1" href={registros}>
                      {t("registros-title")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-1" href={normativos}>
                      {t("normativo-title")}
                    </a>
                  </p>
                </ul>
              </div>
            </div>

            <div className="trans-card">
              <img src="https://uploads-ssl.webflow.com/575ef60509a5a7a9116d9f8c/5ea21e418558777085ce093a_memoria%20contable%20ERP%20nube%20administracion%20empresas.jpg" />
              <div className="trans-card-content">
                <h2>{t("organigrama-title")}</h2>
                <ul className="trans-list">
                  <p>
                    <a class="link-offset-1" href={memo2018}>
                      {t("memoria-2018")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-2" href={memo2019}>
                      {t("memoria-2019")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={memo2020}>
                      {t("memoria-2020")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={memo2021}>
                    {t("memoria-2021")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={memo2022}>
                    {t("memoria-2022")}
                    </a>
                  </p>
                </ul>
              </div>
            </div>

            <div className="trans-card">
              <img src="https://bradfordjacobs.com/wp-content/uploads/2021/07/economy.jpg" />
              <div className="trans-card-content">
                <h2>{t("info-economica-title")}</h2>
                <ul className="trans-list">
                  <p>
                    <a class="link-offset-1" href={cuentas2015}>
                      {t("cuentas-2015")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-2" href={plan2016}>
                     {t("plan2016-2017")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={cuentas2016}>
                    {t("cuentas-2016")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={cuentas2017}>
                      {t("cuentas-2017")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={cuentas2018}>
                    {t("cuentas-2018")}
                    </a>
                  </p>
                </ul>
              </div>
            </div>

            <div className="trans-card">
              <img src="https://bradfordjacobs.com/wp-content/uploads/2021/07/economy.jpg" />
              <div className="trans-card-content">
                <ul className="trans-list">
                  <p>
                    <a class="link-offset-3" href={cuentas2019}>
                    {t("cuentas-2019")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={auditoría2020}>
                  {t("Informe Auditoría 2020")}

                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={auditoría2021}>
                    {t("Informe Auditoría 2021")}
                    </a>
                  </p>
                  <p>
                    <a class="link-offset-3" href={auditoría2022}>
                    {t("Informe Auditoría 2022")}
                    </a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transparencia;
