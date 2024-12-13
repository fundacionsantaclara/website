import React from "react";
import EventosCard from "./Eventos";
import "./Eventos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const EventosData = () => {
  const { t } = useTranslation();
  const events = t("events", { returnObjects: true });

  const latestEvents = [...events].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div>
      <h1 className="event-title">{t("last-events")}</h1>
      <div className="Event-container">
        {latestEvents.map((event) => (
          <EventosCard
            key={event.id}
            imageSrc={event.imageSrc} 
            eventName={event.eventName}
            date={event.date}
            time={event.time}
            location={event.location}
          />
        ))}
      </div>
      <Link to="/EventosCompleta" className="ver-mas-boton">Ver más</Link>
    </div>
  );
};

export default EventosData;
