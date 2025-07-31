import React, { useContext, useState } from "react";
import cartContext from "../../Store/cartContext";

const CartItem = (props) => {
  const { name, description, price } = props.item;
  console.log(name);

  return (
    <div>
      <div>
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
      <div>
        <span>Total Amount</span>
        <span>300</span>
      </div>
    </div>
  );
};

export default CartItem;
