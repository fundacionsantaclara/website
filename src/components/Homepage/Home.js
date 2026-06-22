import "../../App.css";
import React from "react";
import Cards from "../Cards/Cards";
import Noticias from "../Noticias/Noticias";
import EventosData from "../Pages/EventosData";
import Videopart from "./Videopart";
import MovieSection from "./MovieSection";
import help from "../Fcimages/july.jpg";
import "./Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="humanitarian-corridor">
        <div className="banner-wrapper">
          <img src={help} alt="Reto" className="banner" />
        </div>
        <div className="image-container">
          {/* <div className="buttons-reto">
            <a
              href="https://www2.caixabank.es/apl/donativos/detalle_es.html?DON_codigoCausa=715"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {t("part-donar")}
            </a>
          </div> */}
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
