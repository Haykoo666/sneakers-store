import './styles/app.scss'

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Basket from './components/Drawer/Index';
import {
  getBasketData,
  removeBasketItem,
  saveCartItems,
  addFavoriteToServer,
  getFavorites,
  removeFavorite,
  getItems
} from './actions';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import Orders from './pages/Orders';

//todo. react lazy

// Functions


// ------------------------


function App() {

  const [ basketItems, setBasketItems ] = useState([]);
  const [ cartOpened, setCartOpened ] = useState(false);
  const [ favorites, setFavorites ] = useState([]);
  const [ items, setItems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);



  const onAddToBasket = async (data) => {

    try {
      let sameItem = basketItems.find( item => item.id == data.id )
      
      if (sameItem) {
        await removeBasketItem(sameItem.order)
        setBasketItems(prev => prev.filter(item => item.id !== data.id))
      }else{
        const { data: cartItem } = await saveCartItems(data);
        setBasketItems((prev) => [...prev, cartItem]);
      }
    } catch (error) {
      console.error("cannot add item to cart", error)
    }
  }

  const removeFromBasket = async (id) => {
    try {
        await removeBasketItem(id)
        setBasketItems(basketItems.filter(item => item.order != id))
    } catch (error) {
      console.log("something went wrong before remove item from cart", error);
    }
  }

  const addFavoriteHandler = async (_data) => {

    try {
      const sameItem = favorites.find(( favorite =>  favorite.id == _data.id ));

      if (sameItem) {
        await removeFavorite(sameItem.item)
        setFavorites(favorites.filter(favorite => favorite.id !== _data.id))
      } else {
        const { data } = await addFavoriteToServer(_data)
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert("Something went wrong :(", error)
    }
  }

  const isItemAdded = (id) => {
    return basketItems.some( (item) => item.id == id )
  }
  const isItemAddFavorite = (id) => {
    return favorites.some( (item) => item.id == id )
  }

  useEffect(() => {

      async function fetchData () {
        try {
          const [ itemsResponse, basketResponse, favoritesResponse ] = await Promise.all([ 
            getItems(), getBasketData(), getFavorites() 
          ]);
  
          setFavorites(favoritesResponse.data);
          setBasketItems(basketResponse.data);
          setItems(itemsResponse.data);
          
          setIsLoading(false);
        } catch (error) {
          console.log("something went wrong ", error);
        }
      }

      fetchData()

  }, [])

  return (
    <AppContext.Provider value={{
      items,
      basketItems,
      setBasketItems,
      favorites,
      isItemAdded,
      isItemAddFavorite, 
      addFavoriteHandler,
      cartOpened,
      setCartOpened
    }}>
      <section className="wrapper">
        <Header onOpen = { () => setCartOpened( true ) }/>
        
        <Routes>
          <Route path='/' element={ 
            <Home 
              addFavoriteHandler={ addFavoriteHandler } 
              onAddToBasket={ onAddToBasket }
              basketItems = { basketItems }
              items ={ items }
              isLoading = { isLoading }
            /> 
          } />
          <Route path='/favorites' element={ <Favorites /> } />
          <Route path='/orders' element={ <Orders /> } />
        </Routes>


          <Basket 
            onClose = { () => setCartOpened( false ) } 
            items = { basketItems } 
            onRemove = { (id) => removeFromBasket(id)}
            opened={ cartOpened }
        /> 
            
      </section>
    </AppContext.Provider>
  )
}

export default App