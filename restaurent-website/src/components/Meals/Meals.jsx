import React from "react";
import "./Meals.css";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <div className="meals">
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};

export default Meals;
