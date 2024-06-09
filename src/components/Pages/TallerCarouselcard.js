import React from 'react'
import './TallerCarouselTheme.css'


function TallerCarouselcard({ title, image }) {
  return (
    <div className="TCcard">
      <img src={image} alt={title} className="TCcard-image" />
      <h2 className="TCcard-title">{title}</h2>
    </div>
  )
}

export default TallerCarouselcard