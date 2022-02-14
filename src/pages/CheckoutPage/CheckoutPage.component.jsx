import React from "react";
import { connect } from "react-redux";
import {
  removeCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cart-toggle/cart-toggle.actions";
import {
  selectCartList,
  selectCartListTotal,
} from "../../redux/cart-toggle/cart.selectors";
import "./CheckoutPage.styles.scss";

const CheckoutPage = ({
  cartList,
  total,
  removeCart,
  increaseQuantity,
  decreaseQuantity,
}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Discription</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartList.length
      ? cartList.map((cart) => (
          <div className="checkout-item" key={cart.id}>
            <div className="image-container">
              <img src={cart.imageUrl} alt="item" />
            </div>
            <span className="name">{cart.name}</span>
            <span className="quantity">
              <div
                className="arrow"
                onClick={() => {
                  decreaseQuantity(cart);
                  if (cart.quantity === 1) removeCart(cart);
                }}
              >
                &#10094;
              </div>
              <span className="value">{cart.quantity}</span>
              <div className="arrow" onClick={() => increaseQuantity(cart)}>
                &#10095;
              </div>
            </span>
            <span className="price">{cart.price}</span>
            <div className="remove-button" onClick={() => removeCart(cart)}>
              &#10005;
            </div>
          </div>
        ))
      : null}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeCart: (item) => dispatch(removeCart(item)),
  increaseQuantity: (item) => dispatch(increaseQuantity(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
});
const mapStateToProps = (state) => ({
  cartList: selectCartList(state),
  total: selectCartListTotal(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
