import React from "react";
import CardsItems from "./CardsItems";
import "./Cards.css";
import { useTranslation } from "react-i18next";
import plataformaAlimentos from "../../Images/plataforma.png";
import residencia from "../../Images/residencia.png";
import huerto from "../../Images/huerto.png";
import pisosAcogida from "../../Images/pisosAcogida.png";
import tallerMuñecas from "../../Images/cosedor.png";
import espacioDuchas from "../../Images/duchas.png";
import cosedor from "../../Images/cosedorMoni.png";
import salud from "../../Images/oftalmologia.png";
import invulnerablesCardImage from "../../Images/invulnerablekm0.png";
import yosoy from "../../Images/yosoy.png";
import corredorHumanitario from  "../../Images/refugiado.png"
function Cards() {
  const { t } = useTranslation();
  return (
    <div className="project-cards">
      <h1 className="project-title">{t("proyectos-title")}</h1>
      <div className="project-cards-container">
        <div className="project-cards-wrapper">
          <ul className="project-cards-items">
            <CardsItems
              src={plataformaAlimentos}
              text={t("plataforma-title")}
              path="/plataforma"
            />
            <CardsItems
              src={residencia}
              text={t("resi-title")}
              path="/residencia"
            />
            <CardsItems
             src={huerto}
              text={t("huerto-title")}
              path="/huerto"
            />
            <CardsItems
             src={pisosAcogida}
             text={t("pisos-title")}
              path="/piso"
            />
            <CardsItems
              src={tallerMuñecas}
              text={t("taller-title")}
              path="/taller"
            />
            <CardsItems
              src={espacioDuchas}
               text={t("duchas-title")}
              path="/duchas"
            />
            <CardsItems
              src={cosedor}
              text={t("cosidor-title")}
              path="/cosidor"
            />
            <CardsItems
             src={salud}
              text={t("oftamologia-title")}
              path="/oftamologia"
            />
          </ul>

          <h1 className="otro-title">{t("otroproyectos-title")}</h1>
          <ul className="otro-cards-items">
            <CardsItems
              src={invulnerablesCardImage}
              text={t("invulnerables-title")}
              path="/invulnerables"
            />
            <CardsItems
             src={corredorHumanitario}
              text={t("corridores-title")}
              path="/corridores"
            />
            <CardsItems
              src={yosoy}
               text={t("josoc-title")}
              path="/josoc"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
