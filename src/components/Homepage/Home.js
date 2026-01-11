import "../../App.css";
import React from "react";
import Cards from "../Cards/Cards";
import Noticias from "../Noticias/Noticias";
import EventosData from "../Pages/EventosData";
import Videopart from "./Videopart";
import MovieSection from "./MovieSection";
import christmasImg from "../Fcimages/christmas.jpg";
import "./Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const imageRetoSrc = t("reto_pc");
  const imageRetoSrcMobile = t("reto_mobile");

  return (
    <>
      <div className="humanitarian-corridor">
        <picture>
          <source media="(max-width: 768px)" srcSet={t("reto_mobile")} />
          <img src={t("reto_pc")} alt="Reto" style={{ width: "90%" }} />
        </picture>
        <a
          href="https://www2.caixabank.es/apl/donativos/detalle_es.html?DON_codigoCausa=715"
          target="_blank"
          rel="noopener noreferrer"
          className="button reto-button"
        >
          {t("donativo")}
        </a>
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
