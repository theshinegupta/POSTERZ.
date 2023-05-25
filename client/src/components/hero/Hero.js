import React from 'react'
import './Hero.scss'
import {useNavigate} from "react-router"

function Hero() {
  const navigate=useNavigate();
  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Exclusive Print And ArtWork</h2>
        <p className="subheading">Exclusive Art Pieces, for The Exclusive</p>
        <button onClick={()=> navigate('/category')}className='cta btn-primary' >Explore More</button>
      </div>
    </div>
  )
}

export default Hero
