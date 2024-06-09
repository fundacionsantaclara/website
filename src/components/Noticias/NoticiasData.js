import './Noticias.css'
import React from 'react'
import {Link} from 'react-router-dom'


function NoticiasData(props) {
  return (
    <>
    <li className='noticia-card'>
      <Link className='newscards-item-link' to={props.path}>
     <figure className='noticia-image'>
        <img src ={props.image} className='noticia-cards-item-img'/>
     </figure>
    <h4>{props.heading}</h4>
    <p className='noticia-cards-item-info'>{props.text}</p>
    </Link>
    </li>
    </>
  )
}

export default NoticiasData