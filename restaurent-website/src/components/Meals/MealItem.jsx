import React from "react";
import "./MealItem.css";

const MealItem = (props) => {
  const { name, description, price } = props.item;
  console.log(props.item);

  return (
    <li className="mealItem">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
      <hr />
    </li>
  );
};

export default MealItem;
