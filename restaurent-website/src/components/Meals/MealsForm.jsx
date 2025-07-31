import React, { useContext, useState } from "react";
import "./MealsForm.css";
import cartContext from "../../Store/cartContext";

const MealsForm = (props) => {
  const [userInput, setUserInput] = useState("1");
  const cartctx = useContext(cartContext);

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const buttonClickHandler = () => {
    cartctx.addItem({ ...props.item, amount: +userInput });
    console.log(cartctx);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          defaultValue={1}
          onChange={inputChangeHandler}
          max="5"
          min="1"
        />
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
