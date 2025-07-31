import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import cartContext from "../../Store/cartContext";
import CartItem from "./CartItem";

// doing the increaes and decrease item

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  console.log(cartCtx);

  const totalAmount = cartCtx.item.reduce((sum, item) => {
    return (sum += item.price * item.amount);
  }, 0);

  console.log(totalAmount);

  const closehandler = () => {
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        {cartCtx.item.map((item) => {
          return (
            <>
              <CartItem item={item} />
              <hr />
            </>
          );
        })}
      </div>

      <div className="totalAmount">
        <div>Total Amount</div>
        <div>{totalAmount}</div>
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
