import React from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <div className="header">
      <header className="headerContainer">
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartOpen={props.onCartOpen} />
      </header>
      <div className="header-image">
        <img src={mealsImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
