import React from 'react'
import './Offers.css'
import image1 from '../Assets/image1.jpg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Mind-boggling</h1>
            <h1>Offers For You</h1>
            <p>Check-out The Best Selling Products</p>
            <button>Look-out</button>
        </div>
        <div className="offers-right">
            <img src={image1} alt="" />

        </div>
      
    </div>
  )
}

export default Offers
