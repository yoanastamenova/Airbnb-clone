import React from 'react'
import katie from '../../img/katie-zaferes.png'
import star from '../../img/star.png'
import './Card.css'

export const Card = (props) => {
  return (
    <div className='card'>
        <img src={katie} className='card--img'/>
        <div className='card--stats'>
            <img src={star} className='star'/>
            <span>5.0 </span>
            <span className='gray'>  (6) · </span>
            <span className='gray'>USA</span>
        </div>
        <h2>Life Lessons with Katie Zaferes</h2>
        <p><span className='bold'>From 136$ </span>/ person</p>
    </div>
  )
}
