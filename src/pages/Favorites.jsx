import React, { useContext } from 'react'
import Cart from '../components/Cart'
import AppContext from '../context'
import Info from './../components/Info';

const Favorites = React.memo(() => {

   const { favorites, addFavoriteHandler } = useContext(AppContext)

   return (
      <section className=' p-40'>
         <h2>My favorites</h2>
         <article className='all-items'>
            {
               favorites.length > 0 ? favorites.map(( item ) => 
                  <Cart
                     key={ item.id }
                     item = { item }
                     favorited = { true }
                     onFavorite = { addFavoriteHandler }
                  /> 
               ) :
               <Info 
               title={"nothing added to favorites"}
               description={"go home and add some items to your favorites"}
               img={'/img/empty-cart.jpg'}
               />
            }
         </article>
      </section>
   )
})

export default Favorites