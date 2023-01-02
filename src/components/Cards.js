import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards(props) {
  return (
    <>
    
  <li>
    <Link to={props.movlink} className="card">
      <img src={ props.link ? props.link :"https://i.imgur.com/oYiTqum.jpg"} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={ props.thmlink ? props.thmlink :"https://i.imgur.com/7D7I6dI.png"} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{props.name}</h3>            
            <span className="card__status">1 hour ago</span>
          </div>
        </div>
        <p className="card__description">{props.description}</p>
      </div>
    </Link>      
  </li>    

    </>
  )
}
