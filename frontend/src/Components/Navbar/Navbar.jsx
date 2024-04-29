import React,{useContext, useState} from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const[menu,setMenu]=useState("shop");
 const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>MEHFIL RESTAURANT</p>
            </div>
            
            <ul  className='nav-menu'>
                <li onClick={()=>{setMenu("General")}}><Link style={{textDecoration:'none'}}to='/'>General</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("biryani")}}><Link style={{textDecoration:'none'}}to='/biryani'>Biryani</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Starter")}}><Link style={{textDecoration:'none'}}to='/starter'>Starter</Link> {menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Extra")}}><Link style={{textDecoration:'none'}}to='/extra'>Extra</Link> {menu==="kids"?<hr/>:<></>}</li>
               
            </ul>
            <div className='nav-login-cart'>
              {localStorage.getItem('auth-token')
              ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
                <Link to='/login'><button>Sign-Up</button></Link> }
                <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
    </div>
  )
}

export default Navbar
