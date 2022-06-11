import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";

import "./FoodItem.css";

const FoodItem = (props) => {
  const CartCtx = useContext(CartContext);

  const [amount, setAmount] = useState(0);

  const addItemHandler = (e) => {
    e.preventDefault();
    CartCtx.addItemsToCart(props.title, parseInt(amount, 10), props.price);
    setAmount(0);
  };

  return (
    <div className="food-item">
      <div className="food-item__text-box">
        <p className="food-item__title">{props.title}</p>
        <p className="food-item__description">{props.description}</p>
        <p className="food-item__price">${props.price}</p>
      </div>
      <form className="food-item__form" onSubmit={(e) => addItemHandler(e)}>
        <div className="food-item__form-group">
          <label htmlFor="amount-field">Amount</label>
          <input
            type="number"
            id="amount-field"
            name="amount-field"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default FoodItem;
