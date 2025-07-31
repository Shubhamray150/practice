import React from "react";
import "./MealItem.css";
import MealsForm from "./MealsForm";

const MealItem = (props) => {
  const { name, description, price } = props.item;
  console.log(props.item);

  return (
    <li className="mealItem">
      <div>
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
      <div>
        <MealsForm />
      </div>
    </li>
  );
};

export default MealItem;
