import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import AppContext from '../context';

const Info = ({ title, img,  description }) => {

   const { setCartOpened } = useContext(AppContext);
   const navigate = useNavigate();
   
   const btnHandler = () => {
      setCartOpened(false);
      navigate(`/`)
   }

   return (
      <div className="cartEmpty d-flex align-center justify-center flex-column flex-1">
         <img className="mb-2" width="120px" src={ img } alt="Empty" />
         <h2> { title } </h2>
         <p className="opacity-6">{ description }</p>
         <button onClick={ btnHandler } className="greenButton">
            <img src="img/arrow.svg" alt="Arrow" />
            Go home  
         </button>
      </div> 
   )
}

export default Info