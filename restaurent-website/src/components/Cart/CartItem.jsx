import React, { useContext, useState } from "react";
import cartContext from "../../Store/cartContext";
import "./CartItem.css";

const CartItem = (props) => {
  const cartCtx = useContext(cartContext);
  const { name, description, price, amount } = props.item;
  const minusBtnHandler = () => {
    cartCtx.removeItem(props.item);
  };
  const addBtnHandler = () => {
    cartCtx.addItem({ ...props.item, amount: 1 });
  };

  return (
    <div className="cartItem">
      <div>
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
      <span className="noOfItem">{amount}</span>
      <div>
        <button type="button" className="Btn" onClick={minusBtnHandler}>
          -
        </button>
        <button type="button" className="Btn" onClick={addBtnHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
