import React from "react";

export const Pizzacard = ({ name, price, picture }) => {
  return (
    <div className="card">
      <div>
        <img src={picture} alt="pizza-pic" />
      </div>
      <div>
        <p className="dish-name">{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
