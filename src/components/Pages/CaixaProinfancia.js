import React from "react";
import "./CaixaProinfancia.css";
import HeroImage from "../Fcimages/cpi2.jpg";
import LocationImage from "../Fcimages/cpi3.jpg";
import { useTranslation } from "react-i18next";
import InvulnerableColl from "../Fcimages/cpi4.jpg";
import InvulnerableColl1 from "../Fcimages/cpi5.jpg";

function CaixaProinfancia() {
  const { t } = useTranslation();

  return (
    <div className="caixa-page section__padding">
      <div className="header">
        <h1 className="header-title">{t("cpi-page-title")}</h1>
      </div>
      <div className="caixa-container">
        <div className="caixa-hero">
          <img src={HeroImage} alt="CaixaProinfancia" />

          <div className="caixa-hero-content">
            <h1>{t("caixa_title")}</h1>
            <p>{t("caixa_description")}</p>
          </div>
        </div>

        <section className="caixa-section">
          <h2>{t("caixa_objectives_title")}</h2>

          <div className="caixa-objectives">
            <div>{t("caixa_objective_1")}</div>
            <div>{t("caixa_objective_2")}</div>
            <div>{t("caixa_objective_3")}</div>
            <div>{t("caixa_objective_4")}</div>
            <div>{t("caixa_objective_5")}</div>
          </div>
        </section>

        <section className="caixa-location">
          <div>
            <h2>{t("caixa_where_title")}</h2>
            <p>{t("caixa_where_description")}</p>
          </div>

          <img src={LocationImage} alt="EspaiCaixa" />
        </section>

        <section>
          <h2 className="section-title">{t("caixa_services_title")}</h2>

          <div className="caixa-services">
            <div className="service-card">
              <h3>{t("service_education")}</h3>
              <ul>
                <li>{t("service_education_1")}</li>
                <li>{t("service_education_2")}</li>
                <li>{t("service_education_3")}</li>
                <li>{t("service_education_4")}</li>
                <li>{t("service_education_5")}</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>{t("service_leisure")}</h3>
              <ul>
                <li>{t("service_leisure_1")}</li>
                <li>{t("service_leisure_2")}</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>{t("service_health")}</h3>
              <ul>
                <li>{t("service_health_1")}</li>
                <li>{t("service_health_2")}</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>{t("service_psychology")}</h3>
              <ul>
                <li>{t("service_psychology_1")}</li>
                <li>{t("service_psychology_2")}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="caixa-stats">
          <div className="stat-card">
            <span>4</span>
            <p>{t("stat_entities")}</p>
          </div>

          <div className="stat-card">
            <span>93</span>
            <p>{t("stat_families")}</p>
          </div>
        </section>

        <section className="caixa-partners">
          <h2>{t("partners_title")}</h2>

          <ul>
            <li>{t("partner_1")}</li>
            <li>{t("partner_2")}</li>
            <li>{t("partner_3")}</li>
            <li>{t("partner_4")}</li>
          </ul>
        </section>
        <div className="cpi-logo">
          <img src={InvulnerableColl} alt="" />
          <img src={InvulnerableColl1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CaixaProinfancia;
