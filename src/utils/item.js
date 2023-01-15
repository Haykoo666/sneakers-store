const isItemAdded = (id, basketItems) => {
  return basketItems.some( (item) => item.id == id )
}

export {
  isItemAdded
}