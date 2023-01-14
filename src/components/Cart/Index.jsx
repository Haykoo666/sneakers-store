import React, { useContext, useState } from 'react'
import styles from './Card.module.css'
import AppContext from '../../context';
import Loader from './Loader';




const Card = ({ item, onFavorite, onAdd, favorited = false, loading }) => {

  const [ isFavorite, setIsFavorite ] = useState(favorited)
  const { isItemAdded, isItemAddFavorite } = useContext(AppContext);
  const { title, imageUrl, price, id } = item || {} ;
  const itemInfo = {id, title, imageUrl ,price};


  const btnHandler = () => {
    onAdd(itemInfo)
  }

  const addFavorite = () => {
    onFavorite(itemInfo)
  }
  
  return (
    <div className={ styles.card }>
        {
          loading ? 
            <Loader /> :
          <>
            {
              onFavorite && <div className={ styles.favorite } onClick={ () => setIsFavorite( !isFavorite ) } >
                <img 
                  src = { isItemAddFavorite(id) ? "/img/liked.svg" : "/img/unliked.svg"  } 
                  alt = "unliked" 
                  width = { 38 } 
                  height = { 38 } 
                  loading="lazy"
                  onClick={ addFavorite }
                  
                />
              </div>
            }
            <img src = { imageUrl } alt="sneakers" width="100%" height={ 140 } loading="lazy"/>
            <h5>{ title }</h5>
            <div className="d-flex__space-between__align-center " >
              <div>
                  <p className='m-0' style={ {color: "#6c757d"} }> Price: </p>
                  <strong className={`${onAdd && onFavorite ? "" : "text-line-through"}`}>{ price } RUB </strong>
              </div>
                  {
                    onAdd && <img 
                      src = { isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"  } 
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