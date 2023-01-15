import React, { useContext, useState } from 'react'
import styles from './Card.module.scss'
import AppContext from '../../context';
import Loader from '../../utils/Loader';
import { isItemAddFavorite } from '../../utils/favorite';
import { isItemAdded } from '../../utils/item';




const Card = ({ item, onFavorite, onAdd,  loading }) => {

  const [ isFavorite, setIsFavorite ] = useState(false)
  const { favorites, basketItems} = useContext(AppContext);

  const { title, imageUrl, price, id } = item || {} ;
  const itemInfo = {id, title, imageUrl ,price};


  const btnHandler = () => {
    onAdd(itemInfo)
  }

  const addFavorite = () => {
    onFavorite(itemInfo)
    setIsFavorite( !isFavorite )
  }
  
  return (
    <div className={ styles.card }>
        {
          loading ? 
            <Loader /> :
          <>
            {
              onFavorite && <div className={ styles.favorite } onClick={ addFavorite }>
                <img 
                  src = { isItemAddFavorite(id, favorites) ? "/img/liked.svg" : "/img/unliked.svg"  } 
                  alt = "unliked" 
                  width = { 38 } 
                  height = { 38 } 
                  loading="lazy"
                />
              </div>
            }
            <img src = { imageUrl } alt="sneakers" width="100%" height={ 140 } loading="lazy"/>
            <h5>{ title }</h5>
            <div className="d-flex__space-between__align-center " >
              <div>
                  <p className='m-0' style={ {color: "#6c757d"} }> Price: </p>
                  <strong className={`${onAdd && onFavorite ? "" : "text-line-through"}`}>{ price } AMD </strong>
              </div>
                  {
                    onAdd && <img 
                      src = { isItemAdded(id, basketItems) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"  } 
                      alt="plus svg" 
                      loading="lazy"
                      className='pointer'
                      onClick={ btnHandler } 
                    />
                  }
            </div>
            
          </>
        }

    </div>
  )
}

export default Card