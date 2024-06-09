import React from 'react'
import EventosCard from './Eventos';
import './Eventos.css'
import Sagrada from '../Fcimages/sagrada familia.jpg'
import Recapte from '../Fcimages/gran recapte.jpg'
import Vinya from '../Fcimages/vinya cross2.png'



const events = [
  {
    id: 1,
    imageSrc: Vinya,
    eventName: 'Vinya cross',
    date: 'Noviembre 19, 2023',
    time: '2:00 PM',
  },
  {
    id: 1,
    imageSrc: Recapte,
    eventName: 'Gran recapte',
    date: 'Noviembre 24, 2023, Noviembre 25, 2023',
    time: '2:00 PM',
  },
  {
    id: 1,
    imageSrc: Sagrada,
    eventName: 'Missa Criolla',
    date: 'Diciembre 12, 2023',
    time: '2:00 PM',
  },
  // ... other events
];
const EventosData = ()=> {
  return (
    <di>
         <h1 className="event-title">Próximos Eventos</h1>
    <div className="Event-container">
       {events.map(event => (
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
}

export default EventosData
