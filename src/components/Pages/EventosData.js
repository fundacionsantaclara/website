import React from "react";
import EventosCard from "./Eventos";
import "./Eventos.css";
import Sagrada from "../Fcimages/sagrada familia.jpg";
import Recapte from "../Fcimages/gran recapte.jpg";
import Vinya from "../Fcimages/vinya cross2.png";
import ukranians from "../../Images/ucrania.jpg";

const events = [
  {
    id: 1,
    imageSrc: ukranians,
    eventName: "250 sonrisas",
    date: "Jun, 2024",
    time: "2:00 PM",
  },
  {
    id: 1,
    imageSrc: Recapte,
    eventName: "Gran recapte",
    date: "May, 2024",
    time: "2:00 PM",
  },
  {
    id: 1,
    imageSrc: Sagrada,
    eventName: "Missa Criolla",
    date: "Dec 12, 2023",
    time: "2:00 PM",
  },
  // ... other events
];
const EventosData = () => {
  return (
    <di>
      <h1 className="event-title">Próximos Eventos</h1>
      <div className="Event-container">
        {events.map((event) => (
          <EventosCard
            key={event.id}
            imageSrc={event.imageSrc}
            eventName={event.eventName}
            date={event.date}
            time={event.time}
          />
        ))}
      </div>
    </di>
  );
};

export default EventosData;
