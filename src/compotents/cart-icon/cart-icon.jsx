import React from "react";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart-toggle/cart-toggle.actions";
import { selectCartListCount } from "../../redux/cart-toggle/cart.selectors";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

const CartIcon = ({ toggleCart, cartCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});
const mapStateToProps = (state) => ({
  cartCount: selectCartListCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
