export const increaseQuantityUtility = (cartListState, currentItem) => {
  return cartListState.map((cart) => {
    if (cart.id === currentItem.id) {
      return { ...cart, quantity: cart.quantity + 1 };
    }
    return cart;
  });
};

export const decreaseQuantityUtility = (cartListState, currentItem) => {
  return cartListState.map((cart) => {
    if (cart.id === currentItem.id) {
      return { ...cart, quantity: cart.quantity - 1 };
    }
    return cart;
  });
};
