import React from 'react'
import group from '../../img/Group 77.png'
import './Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
        <img src={group} className='hero--photo' />
        <h1 className='hero--header'>Online experiences</h1>
        <p className='hero--text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}
