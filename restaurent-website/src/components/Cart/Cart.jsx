import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import cartContext from "../../Store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  console.log(cartCtx.item);

  const closehandler = () => {
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        {cartCtx.item.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
      <div className="actions">
        <button className="closeBtn" onClick={closehandler}>
          Close
        </button>
        <button className="orderBtn">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
