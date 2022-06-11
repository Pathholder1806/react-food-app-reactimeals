import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

import "./CartItem.css";

const CartItem = (props) => {
  const CartCtx = useContext(CartContext);

  return (
    <div className="section-cart__item">
      <div className="order-details">
        <span className="order-item-title">{props.title}</span>
        <span className="order-item-price">{props.price}</span>
        <span className="order-item-quantity">Qty: {props.qty}</span>
      </div>
      <div className="order-action">
        <button
          className="order-action-add"
          onClick={() => CartCtx.increaseQtyHandler(props.title)}
        >
          +
        </button>
        <button
          className="order-action-subtract"
          onClick={() => CartCtx.decreaseQtyHandler(props.title)}
        >
          -
        </button>
        <button
          className="order-action-remove"
          onClick={() => CartCtx.deleteItemHandler(props.title)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
