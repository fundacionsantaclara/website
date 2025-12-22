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

  return (
    <>
      <div className="christmas-banner">
        <img
          src={christmasImg}
          alt="Merry Christmas"
          style={{ width: "90%", maxHeight: "185px" }}
        />
        <div className="christmas-text-group">
          <div>{t("christmas.line1")}</div>
          <div>{t("christmas.line2")}</div>
          <div>{t("christmas.line3")}</div>
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
