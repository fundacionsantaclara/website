import React from "react";
import EventosCard from "./Eventos";
import "./Eventos.css";
import { useTranslation } from "react-i18next";

const EventosCompleta = () => {
  const { t } = useTranslation();
  const events = t("events", { returnObjects: true });

  const sortedEvents = [...events].sort((a, b) => b.id - a.id);

  return (
    <div className="noticias-card-container">
      <h1 className="event-title">{t("last-events")}</h1>
      <div className="Event-container completa-list">
        {sortedEvents.map((event) => (
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
    </div>
  );
};

export default EventosCompleta;