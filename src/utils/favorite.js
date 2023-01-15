const isItemAddFavorite = (id, favorites) => {
  return favorites.some( (item) => item.id == id )
}


export{
  isItemAddFavorite
}