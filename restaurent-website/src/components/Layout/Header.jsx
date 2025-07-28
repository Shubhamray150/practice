import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.jpg";

const Header = () => {
  return (
    <div className="header">
      <header className="headerContainer">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="header-image">
        <img src={mealsImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
