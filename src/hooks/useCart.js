import React, { useContext } from 'react';
import AppContext from '../context';

export const useCart = () => {
  const { basketItems, setBasketItems } = useContext(AppContext);
  const totalPrice = basketItems.reduce((sum, obj) => obj.price + sum, 0);
  const tax = (totalPrice / 100 * 5).toFixed(2) ;
  

  return { basketItems, setBasketItems, totalPrice, tax };
};