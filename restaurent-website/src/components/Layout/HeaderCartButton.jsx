import React from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const headerButtonClickHandler = () => {
    props.onCartOpen();
  };
  return (
    <button className="headerBtn" onClick={headerButtonClickHandler}>
      <CartIcon />
      <span className="cartName">Your Cart</span>
      <span className="total-cart">0 </span>
    </button>
  );
};

export default HeaderCartButton;
