import React, { useContext } from 'react'
import AppContext from './../context';

const Info = ({ title, img,  description }) => {

   const { setCartOpened } = useContext(AppContext);

   return (
      <div className="cartEmpty d-flex align-center justify-center flex-column flex-1">
         <img className="mb-2" width="120px" src={ img } alt="Empty" />
         <h2> { title } </h2>
         <p className="opacity-6">{ description }</p>
         <button onClick={ () => setCartOpened(false) } className="greenButton">
            <img src="img/arrow.svg" alt="Arrow" />
            Go back
         </button>
      </div> 
   )
}

export default Info