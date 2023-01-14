import React, { useEffect, useState } from 'react'
import { getOrders } from '../actions'
import Cart from '../components/Cart'

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
   

   return (
      <section className=' p-40'>
         <h2>My orders</h2>
         <article className='d-flex flex-wrap container'>
            {
               (isLoading ? [...Array(10)] : orders).map(( order, index ) => {
                  return <Cart 
                           item={ order } 
                           key={ index } 
                           loading={ isLoading }
                        />
               })
            }
         </article>
      </section>
   )
}

export default Orders