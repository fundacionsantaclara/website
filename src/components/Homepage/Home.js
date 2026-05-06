import "../../App.css";
import React from "react";
import Cards from "../Cards/Cards";
import Noticias from "../Noticias/Noticias";
import EventosData from "../Pages/EventosData";
import Videopart from "./Videopart";
import MovieSection from "./MovieSection";
import smiles from "../Fcimages/smiles.jpeg";
import papa from "../Fcimages/papa2.jpg";
import pickups from "../Fcimages/pickups.jpeg";
import "./Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="humanitarian-corridor">
        <div className="banner-wrapper">
          <img src={papa} alt="Reto" className="banner" />
          <img src={pickups} alt="Reto" className="banner" />
        </div>
        <div className="image-container">
          <picture>
            <img src={smiles} alt="Reto" className="reto-image" />
          </picture>

          <div className="image-text">{t("summer_peace_text")}</div>
          <div className="image-subtexts">
            <div className="image-subtext">{t("summer_peace_subtext_1")}</div>
            <div className="image-subtext">{t("summer_peace_subtext_2")}</div>
          </div>

          <div className="buttons-reto">
            <a
              href="https://www2.caixabank.es/apl/donativos/detalle_es.html?DON_codigoCausa=715"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {t("part-donar")}
            </a>
          </div>
        </div>
      </div>
      <Videopart />
      <MovieSection />
      <Noticias />
      <Cards />
      <EventosData />
    </>
  );
}

export default Home;
