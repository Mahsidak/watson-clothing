const cartListUtility = (cartListState, currentItem) => {
  const isCurrentItemExistsAlready = cartListState.find(
    (cart) => cart.id === currentItem.id
  );
  if (isCurrentItemExistsAlready) {
    return cartListState.map((cart) => {
      if (cart.id === currentItem.id) {
        return { ...cart, quantity: cart.quantity + 1 };
      }
      return cart;
    });
  }
  return [
    ...cartListState,
    { ...currentItem, quantity: currentItem.quantity + 1 },
  ];
};

export default cartListUtility;
