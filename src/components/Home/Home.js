import React, { Fragment, useContext } from "react";

import Hero from "../Hero/Hero";
import Information from "../Information/Infomation";
import FoodItems from "../Food/FoodItems";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import CartContext from "../../store/CartContext";

const Home = () => {
  const CartCtx = useContext(CartContext);

  return (
    <Fragment>
      <Header />
      <Hero />
      <Information />
      <FoodItems />
      <Footer />
      {CartCtx.isCartVisible && <Cart />}
    </Fragment>
  );
};

export default Home;
