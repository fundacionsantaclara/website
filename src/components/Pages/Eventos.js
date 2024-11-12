import React from 'react';
import './Eventos.css';

function Eventos({ imageSrc, eventName, date, time, location }) {
  return (
    <div className="event-card">
      <img src={imageSrc} alt="Event" className="event-card-image" />
      <div className="event-card-content">
        <h2 className="event-name">{eventName}</h2>
        <p className="event-details">
          <strong>Fecha:</strong> {date} <br />
          <strong>Hora:</strong> {time} <br />
          <strong>Ubicación:</strong> <span className="event-location">{location}</span>
        </p>
      </div>
    </div>
  );
}

export default Eventos;