import React, { useContext } from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../Store/cartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);
  console.log(cartCtx.item);

  const totalCartItem = cartCtx.item.reduce((sum, item) => {
    return (sum += item.amount);
  }, 0);
  console.log(totalCartItem);

  const headerButtonClickHandler = () => {
    props.onCartOpen();
  };
  return (
    <button className="headerBtn" onClick={headerButtonClickHandler}>
      <CartIcon />
      <span className="cartName">Your Cart</span>
      <span className="total-cart">{totalCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
