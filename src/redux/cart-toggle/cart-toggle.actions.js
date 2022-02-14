import { cartToggleActionTypes } from "./cart-toggle.types";

export const toggleCart = () => ({
  type: cartToggleActionTypes.TOGGLE_CART,
});

export const addToCart = (item) => ({
  type: cartToggleActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeCart = (item) => ({
  type: cartToggleActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const increaseQuantity = (item) => ({
  type: cartToggleActionTypes.INCREASE_QUANTITY,
  payload: item,
});
export const decreaseQuantity = (item) => ({
  type: cartToggleActionTypes.DECREASE_QUANTITY,
  payload: item,
});
