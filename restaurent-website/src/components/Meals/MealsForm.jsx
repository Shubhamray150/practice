import React from "react";
import "./MealsForm.css";

const MealsForm = (props) => {
  const buttonClickHandler = () => {};
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input type="number" max="5" min="1" />
      </div>
      <div className="action">
        <button onClick={buttonClickHandler} className="addBtn">
          + Add
        </button>
      </div>
    </form>
  );
};

export default MealsForm;
