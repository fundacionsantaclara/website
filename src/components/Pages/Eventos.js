import React from "react";
import "./Eventos.css";

function Eventos({
  imageSrc,
  eventName,
  date,
  time,
  location,
  Confirmation,
  timetitle,
  datetitle,
  placetitle,
  confirmtitle,
}) {
  return (
    <div className="event-card">
      <img src={imageSrc} alt="Event" className="event-card-image" />
      <div className="event-card-content">
        <h2 className="event-name">{eventName}</h2>
        <p className="event-details">
          <strong>{datetitle}</strong> {date} <br />
          <strong>{timetitle}</strong> {time} <br />
          <strong>{placetitle}</strong>{" "}
          <span className="event-location">{location}</span>
          <br />
          <strong>{confirmtitle}</strong>{" "}
          <span className="event-location">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeWrL_zHtCfv1tQzE5gzG33bRMLle2dCoQr1_8gOQVPhvitnQ/viewform?usp=pp_url"
              className="event-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Confirmation}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Eventos;
