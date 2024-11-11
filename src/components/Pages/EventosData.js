import React from "react";
import EventosCard from "./Eventos";
import "./Eventos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Importa las imágenes locales
import Sagrada from "../Fcimages/sagrada familia.jpg";
import Recapte from "../Fcimages/gran recapte.png";
import Vinya from "../Fcimages/vinya cross2.png";
import Ukranians from "../../Images/250ucranianos.png";

// Mapeo de nombres de imágenes a imágenes importadas
const imageMap = {
  sagrada: Sagrada,
  recapte: Recapte,
  vinya: Vinya,
  ukranians: Ukranians
};

const EventosData = () => {
  const { t } = useTranslation();
  const events = t("events", { returnObjects: true });

  // Ordenar eventos por ID descendente y obtener los tres primeros
  const latestEvents = [...events].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div>
      <h1 className="event-title">{t("last-events")}</h1>
      <div className="Event-container">
        {latestEvents.map((event) => (
          <EventosCard
            key={event.id}
            imageSrc={imageMap[event.imageName]} // Mapea el nombre de la imagen a la imagen importada
            eventName={event.eventName}
            date={event.date}
            time={event.time}
            location={event.location} // Añade ubicación aquí
          />
        ))}
      </div>
      <Link to="/EventosCompleta" className="ver-mas-boton">Ver más</Link>
    </div>
  );
};

export default EventosData;