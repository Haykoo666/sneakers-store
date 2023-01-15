import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart';

const Header = ({ onOpen }) => {

   const { totalPrice } = useCart();

   return (
      <header className="d-flex__space-between__align-center header">
            <Link to="/">
               <div className="d-flex align-center">
                     <img src="img/logo.png" alt="logo" width={ 40 } height={ 40 } />
                     <div className="header--info">
                        <h3 className="text-UPPERCASE "> Sneakers World  </h3>
                        <p>Best sneakers in our region </p>
                     </div>
               </div>
            </Link>
            <hr className='line' style={{display: "none"}}/>
         <ul className="d-flex">
            <li className="mr-30 pointer cart-info_block" onClick={ onOpen }>
               <img src="img/cart.svg" alt="cart icon" /> <span> {totalPrice} AMD</span>
            </li>
            <li>
               <Link to="/favorites" title='favorites'>
                  <img src="img/heart.svg" alt="heart icon" width={22} height={22}/>
               </Link>
            </li>
            <li>
               <Link to="/orders" title='orders'>
                  <img src="img/user.svg" alt="user icon" width={22} height={22}/>
               </Link>
            </li>
         </ul>
      </header>
   )
}

export default Header