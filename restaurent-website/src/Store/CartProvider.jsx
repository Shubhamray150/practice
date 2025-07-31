import React, { useContext, useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  const addItemhandler = (data) => {
    setItem((prevState) => {
      const existingItem = prevState.find((i) => data.id == i.id);
      if (existingItem) {
        return prevState.map((i) => {
          if (i.id == data.id) {
            return { ...i, amount: i.amount + +data.amount };
          } else {
            return i;
          }
        });
      } else {
        return [...prevState, data];
      }
    });
  };

  const removeItemHandler = () => {};

  const cartContextCtx = {
    item: items,
    addItem: addItemhandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContextCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// setItem((prevState) => {
//   const existingItem = prevState.find((item) => data.id == item.id);

//   if (existingItem) {
//     return prevState.map((i) => {
//       if (i.id == data.id) {
//         return { ...i, amount: +i.amount + +data.amount };
//       } else {
//         i;
//       }
//     });
//   } else {
//     return [...prevState, data];
//   }
// });
