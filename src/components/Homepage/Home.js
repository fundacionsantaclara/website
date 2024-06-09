import "../../App.css";
import React from "react";
import Cards from "../Cards/Cards";
import Noticias from "../Noticias/Noticias";
import EventosData from "../Pages/EventosData";
import Videopart from "./Videopart";

function Home() {
  return (
    <>
      <Videopart />
      <Noticias />
      <Cards />
      <EventosData />
    </>
  );
}

export default Home;
