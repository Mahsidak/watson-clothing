import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartList } from "../../redux/cart-toggle/cart.selectors";
import { toggleCart } from "../../redux/cart-toggle/cart-toggle.actions";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartList, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartList.length ? (
        cartList.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCart());
      }}
    >
      checkout
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartList: selectCartList(state),
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
