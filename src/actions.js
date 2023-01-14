import axios from "axios";

//* get request data

const getItems = async() =>  await axios.get("https://63a33b3a471b38b20609d6a8.mockapi.io/items");
const getOrders = async() =>  await axios.get(`https://63a33b3a471b38b20609d6a8.mockapi.io/orders/`);
const getBasketData = async() =>  await axios.get("https://63a33b3a471b38b20609d6a8.mockapi.io/basket-items");
const getFavorites = async() =>  await axios.get("https://63a33b3a471b38b20609d6a8.mockapi.io/favorites");

//* post request data

const saveCartItems = async(data) =>  await axios.post("https://63a33b3a471b38b20609d6a8.mockapi.io/basket-items", data);
const addFavoriteToServer = async(data) =>  await axios.post("https://63a33b3a471b38b20609d6a8.mockapi.io/favorites", data);
const sentOrders = async(data) =>  await axios.post(`https://63a33b3a471b38b20609d6a8.mockapi.io/orders/`, data);

//* delete request 

const removeBasketItem = async(id) =>  await axios.delete(`https://63a33b3a471b38b20609d6a8.mockapi.io/basket-items/${id}`);
const removeFavorite = async(id) =>  await axios.delete(`https://63a33b3a471b38b20609d6a8.mockapi.io/favorites/${id}`);






export {
   getItems,
   saveCartItems,
   getBasketData,
   removeBasketItem,
   addFavoriteToServer,
   getFavorites,
   removeFavorite,
   sentOrders,
   getOrders
}


