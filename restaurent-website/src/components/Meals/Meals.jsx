import React from "react";
import "./Meals.css";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
