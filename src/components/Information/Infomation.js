import React from "react";

import "./Information.css";

const Information = () => {
  return (
    <section className="section-information">
      <div className="information-card">
        <h2 className="information-card__heading">
          Delicious Food, Delivered To You
        </h2>
        <p className="information-card__text">
          Choose yout favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at homr.
        </p>
        <p className="information-card__text">
          All out meals are cooked with high-quality ingredients, just-in-time
          of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default Information;
