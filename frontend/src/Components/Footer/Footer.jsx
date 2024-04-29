import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            
        </div>
        <ul className='footer-links'>
            <li>Food You Love</li>
            <li><a href="tel:9888950789" style={{textDecoration: "none", color: "black"}}>Contact Us</a></li>
            <li><a href= "mailto: mehfilrestaurant@gmail.com"  style={{textDecoration: "none", color: "black"}}>Mail Us</a></li>
        </ul>
        
        <div className="footer-copyright">
            <hr />
            <p>MEHFIL RESTAURANT | All Rights Reserved @ 2024</p>
            <p>Address: LPU Main Gate Behind Laziz Hotel</p>
            
        </div>
      </div>
    
  )
}

export default Footer
