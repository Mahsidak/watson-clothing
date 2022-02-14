import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utility";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../../compotents/cart-dropdown/cart-dropdown.components";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectToggleCard } from "../../redux/cart-toggle/cart.selectors";
import { ReactComponent as Logo } from "../../assests/logo.svg";
import "./header.styles.scss";
const Header = ({ currentUser, toggleCard }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {toggleCard ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  toggleCard: selectToggleCard(state),
});

export default connect(mapStateToProps)(Header);
