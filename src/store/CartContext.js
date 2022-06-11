import React, { useReducer } from "react";

const CartContext = React.createContext({
  isCartVisible: false,
  itemsInCart: [],
  numberOfItemsInCart: 0,
  cartTotalValue: 0,
  cartViewToggler: () => {},
  addItemsToCart: () => {},
  increaseQtyHandler: () => {},
  decreaseQtyHandler: () => {}
});

const cartReducer = (state, action) => {
  if (action.type === "CART_VIEW_TOGGLE") {
    return {
      ...state,
      isCartVisible: !state.isCartVisible
    };
  }

  if (action.type === "ADD_TO_CART") {
    if (action.payload.qty === 0) {
      return {
        ...state
      };
    }

    const newItems = [...state.itemsInCart];

    let alreadyFound = false;

    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].title === action.payload.title) {
        newItems[i].qty += action.payload.qty;
        alreadyFound = true;
        break;
      }
    }

    if (!alreadyFound) {
      newItems.push(action.payload);
    }

    return {
      ...state,
      itemsInCart: newItems,
      numberOfItemsInCart: state.numberOfItemsInCart + action.payload.qty
    };
  }

  if (action.type === "INCREASE_QTY") {
    const newItems = [...state.itemsInCart];

    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].title === action.payload) {
        newItems[i].qty++;
        break;
      }
    }
    return {
      ...state,
      itemsInCart: newItems,
      numberOfItemsInCart: state.numberOfItemsInCart + 1
    };
  }

  if (action.type === "DECREASE_QTY") {
    let newItems = [...state.itemsInCart];

    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].title === action.payload) {
        newItems[i].qty--;

        if (newItems[i].qty <= 0) {
          newItems = state.itemsInCart.filter((item) => {
            return item.title !== action.payload;
          });
          break;
        }
        break;
      }
    }

    return {
      ...state,
      itemsInCart: newItems,
      numberOfItemsInCart: state.numberOfItemsInCart - 1
    };
  }

  if (action.type === "DELETE_ITEM") {
    let decreaseQty = 0;

    for (let i = 0; i < state.itemsInCart.length; i++) {
      if (action.payload === state.itemsInCart[i].title) {
        decreaseQty = state.itemsInCart[i].qty;
        break;
      }
    }

    const newItems = state.itemsInCart.filter((item) => {
      return item.title !== action.payload;
    });

    return {
      ...state,
      itemsInCart: newItems,
      numberOfItemsInCart: state.numberOfItemsInCart - decreaseQty
    };
  }

  if (action.type === "CALCULATE_CART_VALUE") {
    let value = 0;

    state.itemsInCart.forEach((item) => {
      value += parseFloat(item.price, 10) * item.qty;
    });

    value = value.toFixed(2);

    return {
      ...state,
      cartTotalValue: value
    };
  }

  return {
    isCartVisible: false,
    itemsInCart: [],
    numberOfItemsInCart: 0,
    cartTotalValue: 0
  };
};

export const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    isCartVisible: null,
    itemsInCart: [],
    numberOfItemsInCart: 0,
    cartTotalValue: 0
  });

  const cartViewToggler = () => {
    cartDispatch({ type: "CART_VIEW_TOGGLE" });
  };

  const addItemsToCart = (itemName, qty, price) => {
    const payload = {
      title: itemName,
      qty,
      price
    };

    cartDispatch({
      type: "ADD_TO_CART",
      payload
    });
    cartDispatch({
      type: "CALCULATE_CART_VALUE"
    });
  };

  const increaseQtyHandler = (itemName) => {
    cartDispatch({
      type: "INCREASE_QTY",
      payload: itemName
    });
    cartDispatch({
      type: "CALCULATE_CART_VALUE"
    });
  };

  const decreaseQtyHandler = (itemName) => {
    cartDispatch({
      type: "DECREASE_QTY",
      payload: itemName
    });
    cartDispatch({
      type: "CALCULATE_CART_VALUE"
    });
  };

  const deleteItemHandler = (itemName) => {
    cartDispatch({
      type: "DELETE_ITEM",
      payload: itemName
    });
    cartDispatch({
      type: "CALCULATE_CART_VALUE"
    });
  };

  return (
    <CartContext.Provider
      value={{
        isCartVisible: cartState.isCartVisible,
        numberOfItemsInCart: cartState.numberOfItemsInCart,
        itemsInCart: cartState.itemsInCart,
        cartTotalValue: cartState.cartTotalValue,
        cartViewToggler,
        addItemsToCart,
        increaseQtyHandler,
        decreaseQtyHandler,
        deleteItemHandler
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
