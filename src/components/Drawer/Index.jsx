import React, { useState } from 'react'

import  styles from './Drawer.module.scss'
// style module

import Info from '../Info'
import { removeBasketItem, sentOrders } from '../../actions';
import { useCart } from '../../hooks/useCart';


const Basket = ({ onClose, items, onRemove, opened }) => {

  const [ isOrderComplete, setIsOrderComplete ] = useState(false);
  const [ orderId, setOrderId ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const { totalPrice, tax, basketItems, setBasketItems } = useCart()

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await sentOrders({items: basketItems});
      setOrderId(data.id)
      for (let i = 0; i < basketItems.length; ++i) {
        await removeBasketItem(basketItems[i].order)
      }
      setBasketItems([])
      setIsOrderComplete(true); 
    } catch (error) {
      console.log("we cannot send order", error);
    }finally{
      setIsLoading(false)
    }
      
  }

  return (
    <article className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`} >
      <article className={styles.drawer}>
        <h2 className='d-flex__space-between__align-center'>
          Cart
          <img className='removebtn pointer' src="/img/btn-remove.svg" alt="remove icon" onClick={ onClose } title="close"/>
        </h2>
            <hr className='basket--line line' />
        <section className={`${styles.items}`}>
          {
            items && items.length > 0 ? (
              <>
                {
                  items.map(({ id, title, imageUrl, price, order }) =>  (  
                    <div className={ styles.cartItem } key = { id }>
                      <img 
                        src={ imageUrl } 
                        alt="Sneakers " 
                        width={ 70 } 
                        height={ 70 } 
                        className="mr-20" 
                      />
                      <div className='mr-20'>
                        <p className='m-0 mb-1'> { title } </p>
                        <strong> { price } AMD </strong>
                      </div>
                      <button className='btn-0 pointer'>
                        <img 
                          className={styles.removebtn} 
                          src="/img/btn-remove.svg" 
                          alt="remove icon" 
                          onClick={() =>onRemove(order)}
                        />
                      </button>
                    </div>
                  )
                  )
                }
                        
              </>
            ) :
            <Info 
              title={isOrderComplete ? 'Order completed!' : 'Cart is empty'}
              description={
                isOrderComplete
                  ? `Your order #${orderId} soon to be delivered by courier`
                  : 'Please add at least one pair of sneakers to place an order.'
              }
              img={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
            />

          }
        </section>

        {
          items.length > 0 && <section className={styles.cartTotalBlock}>
          <ul>
            <li className='d-flex__space-between align-end gap-10'>
              <span> Total price: </span>
              <div></div>
              <strong> { totalPrice } AMD</strong>
            </li>
            <li className='d-flex__space-between align-end gap-10'>
              <span>Tax 5%: </span>
              <div></div>
              <strong> { tax } AMD</strong>
            </li>
          </ul>
          <button className='greenButton' onClick={onClickOrder} disabled={ isLoading }> 
            Go to checkout 
            <img src="/img/arrow.svg" alt="arrow icon" />
          </button>
        </section>
        }
      </article>
    </article>
  )
}

export default Basket