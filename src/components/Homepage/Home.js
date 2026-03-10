import "../../App.css";
import React from "react";
import Cards from "../Cards/Cards";
import Noticias from "../Noticias/Noticias";
import EventosData from "../Pages/EventosData";
import Videopart from "./Videopart";
import MovieSection from "./MovieSection";
import smiles from "../Fcimages/smiles.jpeg";
import "./Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const imageRetoSrc = t("reto_pc");
  const imageRetoSrcMobile = t("reto_mobile");

  return (
    <>
      <div className="humanitarian-corridor">
        <div className="image-container">
          <picture>
            <img src={smiles} alt="Reto" className="reto-image" />
          </picture>

          <div className="image-text">{t("summer_peace_text")}</div>

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
