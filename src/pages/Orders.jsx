import React, { useEffect, useState } from 'react'
import { getOrders } from '../actions'
import Cart from '../components/Cart'
import Info from '../components/Info';

const Orders = () => {

  const [ orders, setOrders ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);


  useEffect(() => {
    (async() => {
      try {
        const { data } = await getOrders();
        setOrders(data.map(order => order.items).flat());
        setIsLoading(false)
      } catch (error) {
        console.log("something went wrong", error);
      }
    })()
  
  }, [])
  
  if (orders || orders?.length > 0) {
    return( 
    <Info 
          title="Nothing ordered" 
          description="first buy something then you can see your purchase"
          img="/img/empty-cart.jpg"
    />
  )}

  return (
    <section className=' p-40'>
      <h2>My orders</h2>
      <article className='d-flex flex-wrap container'>
        {
          (isLoading ? [...Array(10)] : orders).map(( order, index ) => {
            return (
              <Cart 
                item={ order } 
                key={ index } 
                loading={ isLoading }
              />
            )
          })
        }
        {
          !orders && orders?.length > 0 && <Info 
          title="Nothing ordered" 
          description="first buy something then you can see your purchase"
          img="/img/empty-cart.jpg"
            />
        }
      </article>
    </section>
  )
}

export default Orders