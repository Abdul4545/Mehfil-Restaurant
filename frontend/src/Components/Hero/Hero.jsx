import React from 'react'
import './Hero.css'
import image1 from './image1.jpg'
const Hero = () => {
  return (
    <div className='hero'>
    <div className="hero-left">
      <p>Lets beat the hunger</p>
      <p>with</p>
     <div><p>best biryani,</p></div>
      <div><p>bursting with flavors and aroma &#128523;</p></div>
    <div> 
    </div>

    

    </div>
    <div className="hero-right"> 
        <img src={image1} alt="" /> 
    </div>
  </div>
  )
}

export default Hero
