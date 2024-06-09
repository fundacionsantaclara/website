import React from 'react'
import './Eventos.css'

function Eventos({ imageSrc, eventName, date, time }) {
  return (
<div className="event-card">
      <img src={imageSrc} alt="Event" className="event-card-image" />
      <div className="event-card-content">
        <h2 className="event-name">{eventName}</h2>
        <p className="event-details">
          <strong>Date:</strong> {date} <br />
          <strong>Time:</strong> {time}
        </p>
      </div>
    </div>
      )
}

export default Eventos