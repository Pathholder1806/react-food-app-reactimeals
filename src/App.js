import React, { useContext } from "react";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import AuthContext from "./store/AuthContext";
import { CartContextProvider } from "./store/CartContext";

import "./styles.css";

export default function App() {
  const AuthCtx = useContext(AuthContext);

  return (
    <div className="App">
      {!AuthCtx.isLoggedIn && <Login />}
      <CartContextProvider>
        {AuthCtx.isLoggedIn && <Home />}
      </CartContextProvider>
    </div>
  );
}
