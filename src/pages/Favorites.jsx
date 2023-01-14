import React, { useContext } from 'react'
import Cart from '../components/Cart'
import AppContext from '../context'

const Favorites = React.memo(() => {

   const { favorites, addFavoriteHandler } = useContext(AppContext)

   return (
      <section className=' p-40'>
         <h2>My favorites</h2>
         <article className='all-items'>
            {
               favorites.map(( item ) => 
                  <Cart
                     key={ item.id }
                     item = { item }
                     favorited = { true }
                     onFavorite = { addFavoriteHandler }
                  /> 
               )
            }
         </article>
      </section>
   )
})

export default Favorites