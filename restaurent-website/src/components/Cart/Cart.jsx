import React from "react";
import "./Cart.css";
import Modal from "../UI/Modal";

const Cart = () => {
  return (
    <Modal>
      <div>
        <span>Sushi</span>
        <div className="total">
          <h2>Total Amount</h2>
          <h2>30</h2>
        </div>
      </div>
      <div className="actions">
        <button className="closeBtn">Close</button>
        <button className="orderBtn">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
