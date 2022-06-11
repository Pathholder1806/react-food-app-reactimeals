import React, { useContext } from "react";

import CartItem from "./CartItem";

import "./Cart.css";
import CartContext from "../../store/CartContext";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  return (
    <section className="section-cart">
      <div className="section-cart__cart-div">
        <div className="section-cart__heading">
          <div className="section-cart__heading__logo">
            <h1>Your Cart</h1> <ion-icon name="cart-outline"></ion-icon>
          </div>
          <div className="section-cart__heading__btn">
            <button onClick={CartCtx.cartViewToggler}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
        </div>
        {CartCtx.numberOfItemsInCart === 0 && (
          <h1 className="empty-cart-message">No items in cart.</h1>
        )}
        {CartCtx.numberOfItemsInCart > 0 && (
          <div className="section-cart__items">
            {CartCtx.itemsInCart.map((item) => {
              return (
                <CartItem
                  key={item.title}
                  title={item.title}
                  qty={item.qty}
                  price={item.price}
                />
              );
            })}
            <div className="cart-total">
              <span className="cart-total__heading">Cart Total :</span>
              <span className="cart-total__value">
                ${CartCtx.cartTotalValue}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
