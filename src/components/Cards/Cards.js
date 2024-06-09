import React from "react";
import CardsItems from "./CardsItems";
import "./Cards.css";
import { useTranslation } from "react-i18next";

function Cards() {
  const { t } = useTranslation();
  return (
    <div className="project-cards">
      <h1 className="project-title">{t("proyectos-title")}</h1>
      <div className="project-cards-container">
        <div className="project-cards-wrapper">
          <ul className="project-cards-items">
            <CardsItems
              src="https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/12/30/plataforma-de-alimentos-de-manresa.jpeg"
              text={t("plataforma-title")}
              path="/plataforma"
            />
            <CardsItems
              src="https://www.skylandtrail.org/wp-content/uploads/2019/04/adolescent-residential-treatment.jpg"
              text={t("resi-title")}
              path="/residencia"
            />
            <CardsItems
              src="https://images.hola.com/imagenes/decoracion/20210408187392/plantar-huerto-urbano-primavera-mc/0-938-406/plantar-huerto-primavera-m.jpg?tx=w_680"
              text={t("huerto-title")}
              path="/huerto"
            />
            <CardsItems
              src="https://www.caralca.es/wp-content/uploads/2021/02/pisos-en-venta-en-Huelva.jpg"
              text={t("pisos-title")}
              path="/piso"
            />
            <CardsItems
              src="https://www.asafes.org/wp-content/uploads/2022/03/manualidades-1.jpg"
              text={t("taller-title")}
              path="/taller"
            />
            <CardsItems
              src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/ducha-2157861.jpg?tf=3840x"
              text={t("duchas-title")}
              path="/duchas"
            />
            <CardsItems
              src="https://images.squarespace-cdn.com/content/v1/604a66249f0bf327ccdf4b65/1618879721452-JL50AHHAFYBF6BWQNDPB/image-asset.jpeg"
              text={t("cosidor-title")}
              path="/cosidor"
            />
            <CardsItems
              src="https://aio-oftalmologia.com/wp-content/uploads/De-que-se-ocupa-un-oftalmologo.jpg"
              text={t("oftamologia-title")}
              path="/oftamologia"
            />
          </ul>

          <h1 className="otro-title">{t("otroproyectos-title")}</h1>
          <ul className="otro-cards-items">
            <CardsItems
              src="https://fundacionlacaixa.org/documents/234043/558343/pobreza-infantil-invulnerables_1200x630.jpg/3a9499f9-0953-e6af-a57c-b84f532941d5?version=1.0&t=1697478753652&imagePreview=1"
              text={t("invulnerables-title")}
              path="/invulnerables"
            />
            <CardsItems
              src="https://www.clarin.com/img/2022/06/07/kN-lkp8nd9_2000x1500__1.jpg"
              text={t("corridores-title")}
              path="/corridores"
            />
            <CardsItems
              src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/07/13/Pictures/_fa7f9f92-67b2-11e7-95fb-ec6334583ea6.jpg"
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
