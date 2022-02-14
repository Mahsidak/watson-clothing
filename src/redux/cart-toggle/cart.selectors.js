import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
export const selectCartList = createSelector(
  [selectCart],
  (cart) => cart.cartList
);
export const selectToggleCard = createSelector(
  [selectCart],
  (cart) => cart.toggleCard
);
export const selectCartListCount = createSelector(
  [selectCartList],
  (cartList) =>
    cartList.reduce(
      (accumulatedQuantity, item) => accumulatedQuantity + item.quantity,
      0
    )
);

export const selectCartListTotal = createSelector(
  [selectCartList],
  (cartList) =>
    cartList.reduce(
      (accumulatedQuantity, item) =>
        accumulatedQuantity + item.quantity * item.price,
      0
    )
);
