import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'



function CardsItems(props) {
  return (
    <>
    <li className='project-cards-item'>
         <Link className='project-cards-item-link' to={props.path}>
            <figure className='project-cards-item-picwrap' >
               <img src={props.src} alt='' className='project-cards-item-img'/> 
            </figure>
            <div className='project-cards-item-info'>{props.text}</div>
          </Link>
    </li>
</>
  )
}

export default CardsItems