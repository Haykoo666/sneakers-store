import Cart from '../components/Cart'
// if we wrote like that IDEA search index.jsx

import React, { useState } from 'react'


const Home = ({ addFavoriteHandler, onAddToBasket, items, isLoading }) => {

  const [ searchValue, setSearchValue ] = useState("");

  const renderItems = () => {
    const filteredItems = items.filter(item => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase())
    });

    return (isLoading ? [...Array(10)] : filteredItems)
      .map(( item, index ) =>
        <Cart 
          key={ index } 
          item={ item } 
          onFavorite={ (data)=> addFavoriteHandler(data) }
          onAdd = { (data) => onAddToBasket(data)}
          loading={ isLoading }
        />
      )
  }

  return (
  <>
      <main className="content">
        <div className='d-flex__space-between__align-center mb-4 flex-wrap gap-20 search--block'>
        <h3 className='word-break'>
          {
              searchValue  ?
              `Search by:  "${searchValue}"` :
              "All sneakers" 
          }
        </h3>
        
        <div className="search--input">
          <img src="/img/search.svg" alt="search icon" />
          <input type="search" placeholder='Search...' value={ searchValue } onChange={ (e) => setSearchValue(e.target.value) }/>
          
          {
              searchValue && <img src="/img/remove-icon.svg" alt="remove icon" onClick={()=>setSearchValue("")} className="pointer"/>
          }
        </div>
        </div>
        <section className="all-items">
        {
          renderItems()
        }
        
        </section>
      </main>

      </>
  )
  }

  export default Home