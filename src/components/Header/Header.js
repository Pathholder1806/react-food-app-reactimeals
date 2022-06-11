import React, { Fragment, useContext } from "react";
import AuthContext from "../../store/AuthContext";
import CartContext from "../../store/CartContext";

import "./Header.css";

const Header = (props) => {
  const AuthCtx = useContext(AuthContext);
  const CartCtx = useContext(CartContext);

  return (
    <Fragment>
      <header className="header">
        <a href="#" className="header__logo">
          ReactMeals
        </a>
        <nav className="header__navigation">
          <button
            onClick={CartCtx.cartViewToggler}
            className="header__cart-div"
          >
            <ion-icon
              className="header__cart-icon"
              name="cart-outline"
            ></ion-icon>
            <p className="header__cart-text-box">Your cart</p>
            <div className="header__cart-quantity-box">
              <p>{CartCtx.numberOfItemsInCart}</p>
            </div>
          </button>
          <button className="logout-button" onClick={AuthCtx.onLogout}>
            <ion-icon className="logout-icon" name="log-out-outline"></ion-icon>
          </button>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
