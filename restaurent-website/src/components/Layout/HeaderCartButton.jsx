import React from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className="headerBtn">
      <CartIcon />
      <span className="cartName">Your Cart</span>
      <span className="total-cart">0  </span>
    </button>
  );
};

export default HeaderCartButton;
