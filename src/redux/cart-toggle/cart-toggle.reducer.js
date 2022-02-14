import { cartToggleActionTypes } from "./cart-toggle.types";
import cartListUtility from "./cart-list.utility";
import {
  increaseQuantityUtility,
  decreaseQuantityUtility,
} from "./cart-checkout.utility";

const INITIAL_STATE = {
  toggleCard: false,
  cartList: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartToggleActionTypes.TOGGLE_CART:
      return {
        ...state,
        toggleCard: !state.toggleCard,
      };
    case cartToggleActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartList: cartListUtility(state.cartList, action.payload),
      };
    case cartToggleActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter(
          (cart) => cart.id !== action.payload.id
        ),
      };
    case cartToggleActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartList: increaseQuantityUtility(state.cartList, action.payload),
      };
    case cartToggleActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartList: decreaseQuantityUtility(state.cartList, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
