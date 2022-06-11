import React from "react";
import FoodItem from "./FoodItem";

import "./FoodItems.css";

import dishes from "../../db/dishes.json";

const FoodItems = () => {
  return (
    <section className="section-food">
      <div className="section-food__container">
        {dishes.map((dish) => {
          return (
            <FoodItem
              key={dish.title}
              title={dish.title}
              description={dish.description}
              price={dish.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FoodItems;
